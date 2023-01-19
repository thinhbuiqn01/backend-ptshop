const express = require("express"),
  bodyparser = require("body-parser");
const app = express();
const route = require("./routes");
const cors = require("cors");

const path = require("path");
const handlebars = require("express-handlebars").engine;

const db = require("./config/db");

// Middleware
app.use(bodyparser.urlencoded({ extended: false }));

// Template engine
app.engine(
  "handlebars",
  handlebars({
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resourses//views"));

//Connect to DB
db.connect();

app.use(cors());
// Route init
route(app);
app.listen(3001);
