# testTracker
## What is it?

This is a device that can be used by development teams to remind them about commiting work on Github and fixing Travis failing test

## How to setup a development environment?

  * ```NodeJS```
  * ```npm```
  
to install dependencies you need to run ```npm install```

## How to run tests?
Make sure you have .travis.yml file because this is using Travis CI

## How to start the application?
run ```sudo nodemon server.js```

## How to stop the application?

Press ```crl C twice'```

## How does it work?

How the device is, there is a callback function that gets data from Travis CI api. If you have a failing test on Travis then a red LED will come on. When there are no test failing on the build a green LED will be on. If the author has not commited anything for the last 3 hours then a blue light will blink. When Travis is still reading the data see if there are no failing build a white light comes on meaning Travis is busy.
