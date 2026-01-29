import e from "express";
import session from "express-session";
import nocache from "nocache";

const app = e();
const PORT = 3000;

//Set-Up session
app.use(
  session({
    secret: "keys",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

app.use(nocache())
app.set("view engine", "ejs")
app.use(e.json())
app.use(e.urlencoded({ extended: true }));

// 👉 Create an Express server and return "Hello World" on visiting /.
app.get("/", (req, res) => {
    res.send("Hello Express");
});

// 👉 Return a JSON object instead of plain text.
app.get("/json", (req, res) => {
    res.json({message : "Welcome Json", status : "Successs"});
});

// 👉 Create a route /user/:id that returns the id.
app.get("/user/:id", (req, res) => {
    const {id} = req.params;
    res.json({UserId : id });
});

// 👉 Handle queries like /search?name=adi&age=22.
app.get("/search", (req, res) => {
    const {name , age} = req.query;
    res.json({Name : name, Age : age});
});

// 👉 Handle form/data submissions using express.json().
app.post("/register", (req, res) => {
    const {name, mail} = req.body;
    req.session.user = { name, mail };
    res.json(`You are Looged in as ${name} and ${mail}`);
});

app.get("/register", (req, res) => {
  if (req.session.user) {
        const {name, mail} = req.session.user;
    res.json({UserNAme : name, Email : mail});
  }
  res.render("register");
  req.session.destroy();
});










app.listen(PORT,() => {
    console.log(`Server is Running on http://localhost:${PORT}`);
    
});