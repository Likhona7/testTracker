var assert = require("assert");
var minimum_maximum = require("../minimum_maximum");



describe("should return highest and lowest numbers", function(){

it("should return minimum ", function(){

var result = minimum_maximum.minimum([1,2,3,4,5]);
assert.equal(result, 1);


})

it("should return maximum ", function(){

  var result = minimum_maximum.maximum([1,2,3,4,5]);
assert.equal(result, 5);

})





})
