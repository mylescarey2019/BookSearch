// include the mongoose models and define as 'db'
const db = require("../models");

// Defining methods for the bookController and exporting as this file name 'bookController'
module.exports = {
  // find all books using find method and request query string then return result or error
  findAll: function(req, res) {
    db.Book.find(req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  // find specific book using findById method and params id then return result or error
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  // create a new book document in collection by calling create method passing it the request body
  //then return result or error
  create: function(req, res) {
    db.Book.create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  // update a specific book by using findOneAndUpdate method passing in the params id and request body
  //then return result or error
  update: function(req, res) {
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  // delete specific book by using findById method passing in the params id 
  // then chaining next promise and call method remove
  // then return result or error
  remove: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  }
};
