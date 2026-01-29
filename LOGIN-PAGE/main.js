import nocache from "nocache";
import session from "express-session";
import express from "express";
import cors from "cors"

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(nocache());

app.use(cors());

app.use(
  session({
    secret: "keys",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

app.get("/", (req, res) => {
  if (req.session.user) {
    res.render("home",{name:req.session.user});
  } else {
    res.redirect("/login");
  }
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    return res.redirect("/");
  }
  res.render("login",{msg:null});
});

function validation(req, res, next) {
  const { username, password } = req.body;
  if (username === "admin" && password === "1234") {
    req.session.user=username;
    next();
  } else {
    res.render("login",{msg:"Invalid credentials..!"})
  }
}

app.post("/login", validation, (req, res) => {
  res.redirect("/");
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});


app.use((req, res) => {
  res.redirect("/login")
})


app.listen(3000, () => {
  console.log("Running on Port http://localhost:3000");
});
