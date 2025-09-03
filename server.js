const express = require("express");
const session = require('express-session')
const app = express();

app.use(session({
  secret : "key string",
  resave : false,
  saveUninitialized : false
}));



app.get("/", (req, res) => {
  console.log(req.session);
  
  res.send("Hello Session ")
});

app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});

