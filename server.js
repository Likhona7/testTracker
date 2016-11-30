var request = require('request');
var moment = require('moment');
var five = require("johnny-five");
var cron = require('node-cron');
//
var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require("handlebars");
var exphbs = require('express-handlebars');
var app = express();







request('https://api.travis-ci.org/repos/Onwa2014/testTracker.json', function(error, response, body) {
  if (!error && response.statusCode == 200) {
    var data = JSON.parse(body)

    // console.log(data)
    var status = data['last_build_status'];
    var time_started = data['last_build_started_at'];

    console.log(status);

    // console.log(time_started);

    // var now = moment(new Date()); //todays date// var end = moment("time_started"); // another date// var duration = moment.duration(now.diff(end));// var hours = duration.hours();// console.log(hours)

    var board = new five.Board();
    board.on("ready", function() {
      var ledRed = new five.Led(13);
      var ledGreen = new five.Led(12);
      var ledWhite = new five.Led(11);
      var ledOrange = new five.Led(10);



      // "blink" the led in 500ms on-off phase periods

      cron.schedule('*/1 * * * *', function(){

        if(status == 1){
          ledRed.blink(100);
        }
        else if (status == 0) {
          ledGreen.on();
        }

        else if(status == null){
          ledWhite.on();
        }
        else {
          ledRed.off();
          ledGreen.off();
          ledWhite.off();
          ledOrange.off();
        }
        console.log('running a task every one minutes');
      });




    });
    // Show the HTML for the Google homepage.
  }
})
