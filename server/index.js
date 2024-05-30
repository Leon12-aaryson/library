const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const UserModel = require("./models/users")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/library");

app.post('/signup', (req, res) => {
  UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/books', (req, res) => {
  BookModel.create(req.body)
    .then(users => res.json(books))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
  console.log("server is running and a go")
})