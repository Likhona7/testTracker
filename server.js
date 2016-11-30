var request = require('request');
var moment = require('moment');
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
var status = data['last_build_status'];
var time_started = data['last_build_started_at'];

console.log(status);

var now = moment(new Date()); //todays date
var end = moment("time_started"); // another date
var duration = moment.duration(now.diff(end));
var hours = duration.hours();
console.log(hours)

       // Show the HTML for the Google homepage.
  }
})


var board = new five.Board();
board.on("ready", function() {
  var ledRed = new five.Led(13);
  var ledGreen = new five.Led(12);
  var ledWhite = new five.Led(11);

  // "blink" the led in 500ms on-off phase periods
  ledRed.on();
ledGreen.on();
ledWhite.on();

  // ledRed.blink(500);
});
