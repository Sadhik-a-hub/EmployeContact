var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

const { sequelize } = require("./Model/Form.Model");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var FormRouter = require("./routes/Form.Routes");

var app = express();

// Connect to database
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => console.error("DB connection error:", error));

sequelize
  .sync()
  .then(() => {
    console.log("Employee_form table has been created");
  })
  .catch((error) => {
    console.log("Unable to create table:", error);
  });

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// Middleware
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/Form", FormRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

// Start server
const port = process.env.PORT || 3001;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
