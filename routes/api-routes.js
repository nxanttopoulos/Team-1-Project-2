
//Requiring the models
var express = require("express");
var router = express.Router();
var db = require("../models");



router.get("/", function(req, res){

	db.userQuery.findAll({}).then(function(data){
			var handlebarsObject = {
				userQuery: data
			};
			res.render("index", handlebarsObject);
		});
	});


router.post("/", function(req, res){
	db.userQuery.create({
		name: req.body.name,
		zipCode: req.body.zipCode,
		city: req.body.city,
		cyberUrl:req.body.cyberUrl,
		lat:req.body.lat,
		lng:req.body.lng
	}).then(function(){
		res.redirect("/");
	});







});







module.exports=router;