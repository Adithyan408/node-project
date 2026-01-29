// const express = require("express");
// const session = require('express-session')
// const app = express();

// app.use(session({
//   secret : "key string",
//   resave : false,
//   saveUninitialized : false
// }));



// app.get("/", (req, res) => {
//   console.log(req.session);
  
//   res.send("Hello Session ")
// });

// app.listen(5000, () => {
//   console.log("Running on http://localhost:5000");
// });


import express from 'express';

const app = express();

function auth(req, res, next) {
  req.user = {name : "Adhi", age : 24};
  next();
};


function logger(req, res, next) {
  const start = Date.now();
  
  // When response finishes, log details
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
  });
  
  next(); // pass control to next middleware
}

app.use(logger);

let userData = {name : "Adhi", age : 24};

app.get('/',auth, (req, res) =>{
  res.send(req.user)
});

app.patch('/modified', (req, res) => {
  userData.age = 25;
  res.send(userData)
})

app.listen(3000, () => {
  console.log("http://localhost:3000");
  
})

app.use('/', (req, res, next) => {
  if(req.user){
    res.render('home')
  } else {
    res.redirect("/login")
  }
  next();
})


