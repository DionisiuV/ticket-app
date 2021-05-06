//initialize express router
let router = require("express").Router();

//Import User Controller
var userController = require("./userController");

// User routes
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.get("/user", (req, res) => {
  res.send(req.user);
  // console.log(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});
router.route("/").get(userController.index).post(userController.add);
router.route("/login").post(userController.login);
router
  .route("/:user_id")
  .get(userController.view)
  .put(userController.update)
  .delete(userController.delete);

//Export API routes
module.exports = router;
