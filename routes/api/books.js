// import router object to support modular URI routing
const router = require("express").Router();

// import the controller file for book API methods, destructure
const {findAll, create, findById, update, remove} = require("../../controllers/bookController");

// router API methods for book calls - get and post
// Matches with "/api/books"
router.route("/")
  .get(findAll)
  .post(create);

// router API methods for book calls - specific book - get, put and delete
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(findById)
  .put(update)
  .delete(remove);

  // export this file as router
module.exports = router;
