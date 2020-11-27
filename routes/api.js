const fetch = require('node-fetch');
const db = require("../models/Book");
const router = require("express").Router();

//get all books
router.route("/api").get(function(req, res) {
    db.find()
      .then(books => res.json(books))
      .catch(err => {
        console.error(err)
        res.status(400).json(err)
      });
    });

//create new book
router.route("/api").post(function(req, res) {
  db.create(req.body)
    .then(books => res.json(books))
    .catch(err => {
      console.error(err)
      res.status(400).json(err)
    });
  });

  //delete a book
  router.route("/api/:id").delete(function(req, res) {
    db.findById({ _id: req.params.id })
    .then(book => book.remove())
    .then(book => res.json(book))
    .catch(err => {
      console.error(err)
      res.status(400).json(err)
    });
  });

  //delete all books
  router.route("/api/delete/all").delete(function(req, res) {
    db.deleteMany({})
    .then(result => res.json(result))
    .catch(err => {
      console.error(err)
      res.status(400).json(err)
    });
  });

  // Query Google Books API
  router.route("/api/search/:query").get(async function(req, res) {
    let baseURL = "https://www.googleapis.com/books/v1/volumes?q=";
    let query = req.params.query; 
    let apiKey = process.env.GOOGLE_API_KEY;
    let apiKeyFull = "&key=" + apiKey;
    let finalURL = baseURL + query + apiKeyFull;
    fetch(finalURL)
    .then(res => res.json())
    .then(data => {
       let items = data.items;
       res.send({ items });
    })
    .catch(err => {
       res.send({"Error": err});
    });
  });

module.exports = router;   



