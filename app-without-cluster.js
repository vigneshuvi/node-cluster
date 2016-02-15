/*
 * Author:     Priya 
 * Copyright:  Priya
 * Date:	   15/02/2016
 * This file contains the web service environment configuration and register the services and with out cluster.
 */


'use strict';

var express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

var enableCluster = false,
	title = "Node Web Server" + (enableCluster ? "with Cluster" : "with out Cluster"),
	appPort = 4000;


var	enableCORS = function(request, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Date, X-Date');
  return next();
};

app.set('title', title);		// Set the Application title
app.use(bodyParser.json());		// for parsing application/json
app.disable('x-powered-by');
app.use(enableCORS);			// Enable the CORS 

// Response the Home Url
app.get('/',function(req,res){
    try {
        var resJson = {
			status : true,
			message : "Successfully hit the config webservice."
		}
		//console.log("app.getConfig", "Successfully hit the config webservice.");
		return res.status(200).send(resJson);
    } catch (exe) {
    	console.log("app.getConfig", "Exeception occured while access u1v2i3C4o5n6f7i8g9 webservice. \n Error :",exe);
        return res.sendStatus(404);
    }
});

// Listen the environment port number
app.listen(appPort, function () {
		console.log("app.js", "Created the HTTP server listening on port "+appPort+"!");
});


// Exit or Kill node 
process.on('exit', function (){
	console.log("app.exit", "Node killed... Goodbye!");
});