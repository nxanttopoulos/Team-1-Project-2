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

