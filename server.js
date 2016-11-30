var request = require('request');
var five = require("johnny-five");
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





var board = new five.Board();
board.on("ready", function() {
  var ledRed = new five.Led(13);
  var ledGreen = new five.Led(12);
  // "blink" the led in 500ms on-off phase periods
  ledRed.blink(500);
  ledGreen.blink(500);
});
