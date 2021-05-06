const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.ux4ae.mongodb.net/ticket-app?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose is connected");
  }
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://127.0.0.1:5500", //<- location of app
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);
// --------------------------------------------------------------END OF MIDDLEWARE -------------------------------------------------

//Import routes
const userRoutes = require("./user/router");
const ticketRoutes = require("./ticket/router");

//Use API routes in the App
app.use("/api/user", userRoutes);
app.use("/api/ticket", ticketRoutes);

// Welcome message
app.get("/", (req, res) => res.send("Welcome to Express"));

app.listen(4000, () => {
  console.log("Server has started");
});
