import express from 'express';

const app = express();

app.get("/error", (req, res) => {
    res.send("SOmethin g wring")
})
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("something Wrong")
})


app.listen(5000,()=>{
    console.log("Running");
    
})