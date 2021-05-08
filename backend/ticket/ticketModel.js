var mongoose = require("mongoose");

//schema
var ticketSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  Department: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
  priority: {
    type: String,
    required: true,
  },
  ticketDetails: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

// Export Ticket Model
var Ticket = (module.exports = mongoose.model("ticket", ticketSchema));

module.exports.get = function (callback, limit) {
  Ticket.find(callback).limit(limit);
};
