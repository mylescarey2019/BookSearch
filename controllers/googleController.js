// import axios package to allow http calls from client to server side
const axios = require("axios");

// import the mongoose models
const db = require("../models");

// Defining methods for the googleController

// findAll searches the Google Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  // function passed arguments received as parameters in req and res (aka request and response)
  findAll: function(req, res) {
    // destructure the req parameter into params renamed from query query
    const { query: params } = req;
    // make axios HTTP call using get method and URL with appended params
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      // promise return of the axios call in results
      // filter array method to create new array where results
      // only has those value that statify the function
      // in this case the title and owhter fields exist to be 
      // included in the result
      .then(results =>
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      // chained promise that now has the filtered results 
      // in apiBooks
      // then each book in apiBooks is passed to find mongoose method
      // the books are then filtered so the output is every (method) 
      // book that has not aleady in our book collection
      .then(apiBooks =>
        db.Book.find().then(dbBooks =>
          //[1,2,3,4,5,6]
          //dbBooks represents ALL records in Book collection
          //apiBooks represents all records we just got from Goolge which have all truthy values
          //[10,3,67]
          apiBooks.filter(apiBook =>
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      // final answer of new books is returned 
      .then(books => res.json(books))
      // if occured then it is returned
      .catch(err => res.status(422).json(err));
  }
};
