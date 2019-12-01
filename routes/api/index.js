// import path to allowing working with directories and paths
const path = require("path");

// import router object to support modular URI routing
const router = require("express").Router();

// import routes from /books
const bookRoutes = require("./books");

// import routes from /goole
const googleRoutes = require("./google");

// define router to use Book routes
router.use("/books", bookRoutes);

// define router to use Google Routes
router.use("/google", googleRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

// export this file as router
module.exports = router;
