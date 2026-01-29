import express from 'express'

const app = express();


const users = [
  { id: 1, name: "Adithyan", age: 22 },
  { id: 2, name: "Meera", age: 21 },
  { id: 3, name: "Rahul", age: 23 },
  { id: 4, name: "Neha", age: 20 },
  { id: 5, name: "Arjun", age: 24 }
];

app.get('/',(req, res) => {
    res.send(users);
})

app.get('/user/:id', (req, res) => {
    const id  = Number(req.params.id);
    const user = users.find(x => x.id === id)

    if(!user){
        return res.status(404).send("User Not found");
    }
     res.send(user)
    
});

app.get('/user/', (req, res) => {
    const {name , age} = req.query
    res.send({name, age})
});

app.listen(3000, () => {
    console.log("Running");
    
})