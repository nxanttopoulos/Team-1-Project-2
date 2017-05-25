/*
 * Created by elenastaylor on 5/20/17.
 */

//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var port = 3000;
var app = express();


/*Configure a public directory to host static content. this will tell Express to match any routes for files found in
 this folder and deliver the files directly to the browser.*/
app.use(express.static(process.cwd() + "/public"));

/*The extended option allows to choose between parsing the URL-encoded data with the querystring library
(when false) or the qs library (when true). The "extended" syntax allows for rich objects and arrays to be encoded
into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.*/
app.use(bodyParser.urlencoded({ extended: false }));

//Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//run the node server

// Import routes and give the server access to them.
var routes = require("./routes/api-routes.js");
app.use("/", routes);
app.listen(port);