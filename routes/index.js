// import path to allowing working with directories and paths
const path = require("path");

// import router object to support modular URI routing
const router = require("express").Router();

// import route files from /api direcotry
const apiRoutes = require("./api");

// define router to use the imported from /api
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

// export this file as router
module.exports = router;
