/*
 * Created by elenastaylor on 5/20/17.
 */

//dependencies
var express = require('express');
var app = express();


/*The extended option allows to choose between parsing the URL-encoded data with the querystring library
(when false) or the qs library (when true). The "extended" syntax allows for rich objects and arrays to be encoded
into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.*/
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*configure a public directory to host static content. this will tell Express to match any routes for files found in
this folder and deliver the files directly to the browser.*/
app.use(express.static(path.join(__dirname, 'public')));


//run the node server
require("./server/app")(app);

//Heroku dynamically assigns the port. Need to fetch from env. 3000 port works locally
var port      = process.env.PORT || 3000;
app.listen(port);

=======
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require('express-handlebars');
var PORT = 3000;
var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

var db = require("./models");
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
// Set Handlebars.
// var exphbs = require("express-handlebars");
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

