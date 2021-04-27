//Import Ticket Model
Ticket = require("./ticketModel");

//For index
exports.index = function (req, res) {
  Ticket.get(function (err, ticket) {
    if (err)
      res.json({
        status: "error",
        message: err,
      });
    res.json({
      status: "success",
      message: "Got Ticket Successfully!",
      data: ticket,
    });
  });
};

//For creating new Ticket
exports.add = function (req, res) {
  console.log(req.body);
  var ticket = new Ticket();
  ticket.id = req.body.id;
  ticket.title = req.body.title;
  ticket.user = req.body.user;
  ticket.toDepartment = req.body.toDepartment;
  ticket.status = req.body.status;
  ticket.priority = req.body.priority;
  ticket.ticketDetails = req.body.ticketDetails;

  //Save and check error
  ticket.save(function (err) {
    if (err) res.json(err);
    res.json({
      message: "New Ticket Added!",
      data: ticket,
    });
  });
};

// View Ticket
exports.view = function (req, res) {
  Ticket.findById(req.params.ticket_id, function (err, ticket) {
    if (err) res.send(err);
    res.json({
      message: "Ticket Details",
      data: ticket,
    });
  });
};

// Update Ticket
exports.update = function (req, res) {
  Ticket.findById(req.params.ticket_id, function (err, ticket) {
    if (err) res.send(err);

    ticket.id = req.body.id;
    ticket.title = req.body.title;
    ticket.user = req.body.userName;
    ticket.toDepartment = req.body.toDepartment;
    ticket.status = req.body.status;
    ticket.priority = req.body.priority;
    ticket.ticketDetails = req.body.ticketDetails;

    //save and check errors
    ticket.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: "Ticket Updated Successfully",
        data: ticket,
      });
    });
  });
};

// Delete Ticket
exports.delete = function (req, res) {
  Ticket.deleteOne(
    {
      _id: req.params.ticket_id,
    },
    function (err, contact) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Ticket Deleted",
      });
    }
  );
};
