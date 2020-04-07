var express = require("express");
const mongoose = require("mongoose");

var path = require("path");
var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const apiRouter = require('./routes/apiRoutes.js');
const htmlRouter = require('./routes/htmlRoutes.js');
app.use(htmlRouter);
app.use(apiRouter);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  