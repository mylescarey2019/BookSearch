// import router object to support modular URI routing
const router = require("express").Router();

// import the controller file for google API methods
const googleController = require("../../controllers/googleController");

// router API methods for google calls - .get
// Matches with "/api/google"
router
  .route("/")
  .get(googleController.findAll);

// export this file as router  
module.exports = router;
