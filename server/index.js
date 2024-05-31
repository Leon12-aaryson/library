const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const UserModel = require("./models/users")
const ArticleModel = require("./models/article")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/library");

app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email, password })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success")
        }
        else {
          res.json("Incorrect password")
        }
      }
      else {
        res.json("User does not exist")
      }
    })
    .catch(err => res.json(err))
})

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

app.post('/articles', async (req, res) => {
  try {
    const newArticle = new Article(req.body);
    const savedArticle = await newArticle.save();
    res.json(savedArticle);
  } catch (err) {
    res.status(500).send(err);
  }
})

app.get('/articles', (req, res) => {
  ArticleModel.find()
    .then(articles => res.json(users))
    .catch(err => res.json(err))
})


app.listen(3001, () => {
  console.log("server is running and a go")
})