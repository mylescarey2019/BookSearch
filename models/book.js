// import the mongoose object
const mongoose = require("mongoose");

// instansitate mongoose into object Schema
const Schema = mongoose.Schema;

// instanstiate new mongoose schema named bookSchema
const bookSchema = new Schema({
  // fields and their datatype and option objects
  // include whether field is required and whether unique is required
  title: { type: String, required: true },
  subtitle: { type: String },
  // authors is an array of strings (not a single field)
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});
// define new Book collection from model schema
const Book = mongoose.model("Book", bookSchema);

// export file as Book
module.exports = Book;
