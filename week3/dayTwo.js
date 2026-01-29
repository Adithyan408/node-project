import e from "express";


const app = e();
app.use(e.json());

// 👉 Write a middleware that logs every incoming request with method and URL.
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})

app.get("/", (req, res) => {
    res.send("Home Page");
    
});

app.get("/greet", (req, res) => {
    const {name} = req.query
    res.send(`Hello ${name}`)
})

app.get("/user/:id", (req, res) => {
    const {id} = req.params;
    res.send(`Show Id ${id}`)
})



app.listen(5050, () => {
    console.log("listning to PORT http://localhost:5050");
})