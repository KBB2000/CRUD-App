const express = require('express')
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const UserModal = require("./Models/User")
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/crud")
//find all
app.get("/", (req, res) => {
    UserModal.find({})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
//create
app.post("/createUser" ,(req, res) => {
    UserModal.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
//get specific by is
app.get("/getUser/:id" , (req, res) => {
    const id = req.params.id 
    UserModal.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
//update

app.put("/updateUser/:id", (req, res) => {
    const id = req.params.id
    UserModal.findByIdAndUpdate({_id : id}, {name : req.body.name, email : req.body.email, age : req.body.age})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
//delete.
app.delete("/deleteUser/:id" , (req, res) => {
    const id = req.params.id
    UserModal.findByIdAndDelete({_id : id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3004)