//initialize express router
let router = require("express").Router();

//Import Ticket Controller
var ticketController = require("./ticketController");

// Ticket routes
router.route("/").get(ticketController.index).post(ticketController.add);
router
  .route("/:ticket_id")
  .get(ticketController.view)
  .put(ticketController.update)
  .delete(ticketController.delete);

//Export API routes
module.exports = router;
