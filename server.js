var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require("handlebars");
var exphbs = require('express-handlebars');
var app = express();


request('https://api.travis-ci.org/repos/Onwa2014/testTracker.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var data = JSON.parse(body)
    // console.log(data)
    console.log(data['last_build_status']);
   // Show the HTML for the Google homepage.
  }
})
