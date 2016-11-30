var request = require('request');

request('https://api.travis-ci.org/repos/Likhona7/53functions.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var data = JSON.parse(body)
    console.log(data)
    console.log(data['last_build_status']);

     // Show the HTML for the Google homepage.
  }
})
