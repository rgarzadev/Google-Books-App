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

module.exports = router;   



