//Import Express
let express = require("express");

let cors = require("cors");

//Start App
let app = express();

app.use(cors());

//Assign port
var port = 3000;

//import body parser
let bodyParser = require("body-parser");

//import mongoose
let mongoose = require("mongoose");

//configure bodyparser to hande the post requests
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

//connect to mongoose
const dbPath =
  "mongodb+srv://admin:admin@cluster0.ux4ae.mongodb.net/ticket-app?retryWrites=true&w=majority";
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const mongo = mongoose.connect(dbPath, options);

mongo.then(
  () => {
    console.log("connected");
  },
  (error) => {
    console.log(error, "error");
  }
);

//Import routes
let userRoutes = require("./user/router");
let ticketRoutes = require("./ticket/router");

//Use API routes in the App
app.use("/api/user", userRoutes);
app.use("/api/ticket", ticketRoutes);

// Welcome message
app.get("/", (req, res) => res.send("Welcome to Express"));

// Launch app to the specified port
app.listen(port, function () {
  console.log("Running FirstRest on Port " + port);
});
