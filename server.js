var request = require('request');
var moment = require('moment');
var timezone = require('moment-timezone');
var five = require("johnny-five");
var cron = require('node-cron');
///
var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require("handlebars");
var exphbs = require('express-handlebars');
var app = express();

///////////////////////////////////////////////////////////////////////////////

var username = process.argv[2] || 'Onwa2014';
var repoName = process.argv[3] || 'testTracker';

var url = "https://api.travis-ci.org/repos/" + username + "/" + repoName + ".json";
// console.log(url);
//running for which user and repo
var board = new five.Board();
board.on("ready", function() {

  var ledRed = new five.Led(13),
    ledGreen = new five.Led(12),
    ledWhite = new five.Led(11),
    ledBlue = new five.Led(10),
    piezo = new five.Piezo(9);

  board.repl.inject({
    piezo: piezo
  });

  cron.schedule('*/5 * * * * *', function() {

    request(url, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body)

        //  console.log(data)
        var status = data['last_build_status'];
        var time_started = data['last_build_started_at'];

console.log(status);
        var switchOffLeds = function() {
            ledRed.off();
            ledGreen.off();
            ledWhite.off();
            ledBlue.off();
            // piezo.stop();
          }

var excludeRedLed = function(){
  ledWhite.off();
  ledBlue.off();
}


        var travisTime = timezone.tz(time_started, "Africa/Johannesburg")
        // console.log(travisTime);

        var now = moment(new Date());
        var end = moment(travisTime); // another date//
        var duration = moment.duration(now.diff(end)); //
        var seconds = duration.asSeconds(); //
        console.log(seconds + " " + "seconds")

     if (seconds >= 50) {
           excludeRedLed();
          ledBlue.blink(100)
        }
        else if (status === 1) {
           switchOffLeds();
          ledRed.on();
          // piezo.play({
          //       song: "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
          //       beats: 1 / 4,
          //       tempo: 5
          //     });
          // setTimeout(function() {
          //
          //   piezo.off();
          // }, 3000);
        }
/////
        else if (status == 0) {
          switchOffLeds();
          ledGreen.on();
        }
        else if (status == null) {
          switchOffLeds();
          ledWhite.on();
        }
         else {
          switchOffLeds();
        }
        console.log('running a task every 15 seconds');
      }
    });

    // Show the HTML for the Google homepage.
  });



});
