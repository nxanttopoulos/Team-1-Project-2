// * Created by elenastaylor on 5/20/17.
//dependencies
var express = require('express');
var app = express();
/*The extended option allows to choose between parsing the URL-encoded data with the querystring library
(when false) or the qs library (when true). The "extended" syntax allows for rich objects and arrays to be encoded
into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.*/
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Heroku dynamically assigns the port. Need to fetch from env. 3000 port works locally
var PORT = process.env.PORT || 3000;
var methodOverride = require("method-override");
var exphbs = require('express-handlebars');
app.use(bodyParser.urlencoded({ extended: false }));
var db = require("./models");	
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Import routes and give the server access to them.
var routes = require("./routes/api-routes.js");
app.use("/", routes);
// Syncing our sequelize models and then starting our express app
 db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});