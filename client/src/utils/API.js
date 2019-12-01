// import axios to allow for HTML calls
import axios from "axios";

// export default can be used to export a single class, function
// or primiative from script file and export is later 
// referenced by the file name - in this case 'API'
// this will be imported in various components to make the API axios
// calls from client side to server side
export default {
  // Gets books from the Google API
  // argument is pass into parameter q (for query string)
  getBooks: function(q) {
    // return the results of the axios call on route /api/google
    // this will be resolved by the server side route definitions
    // and controller
    // the get method is passed the path and params which is /title/
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  // Gets all saved books
  getSavedBooks: function() {
    // return results of get method from route /api/books resolved
    // by the route definitions and controller server side
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    // return results of the delete method for a spefic book id
    // route is /api/books/id  and will be resolved by the 
    // route definitions and controller server side
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  // the book detail object is passed to parameter 'bookData'
  saveBook: function(bookData) {
    // return results of post method via route /api/books
    // will be resolved by route definitions and controller
    // server side
    return axios.post("/api/books", bookData);
  }
};
