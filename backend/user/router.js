//initialize express router
let router = require("express").Router();

//Import User Controller
var userController = require("./userController");

// User routes
router.route("/").get(userController.index).post(userController.add);
router
  .route("/:user_id")
  .get(userController.view)
  .put(userController.update)
  .delete(userController.delete);

//Export API routes
module.exports = router;
