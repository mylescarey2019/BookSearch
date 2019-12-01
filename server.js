// import express object for server support
const express = require("express");

// import/instantiate mongoose object for mongoose ORM support
const mongoose = require("mongoose");

// import route folder to bring in all route files
const routes = require("./routes");

// instansiate express object for server support
const app = express();

// define port that the express server will use
// production from process.env if present otherwise 3001 for dev
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view to the expresse instance "app"
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooksDB",
  {
    // create mongoose default index
    useCreateIndex: true,
    // used for parsing URI connection strings
    useNewUrlParser: true
  }
);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
