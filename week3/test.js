// let interval = setInterval(() => {
//     console.log("Hey, 1 milli second ");
// },1000);

// setTimeout(() => {
//     clearInterval(interval);
// },5000)

import express from "express";

const app = express();

app.get("/", (req, res) => {
    console.log(req.headers);  // log all headers
    res.send("Check your console for request headers");
});

app.listen(3000, () => console.log("Server running on 3000"));
