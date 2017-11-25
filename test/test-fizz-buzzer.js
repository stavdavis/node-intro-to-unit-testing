const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `adder` function
describe('fizzBuzzer', function() {
  // test the normal case #1
  it('should output "fizz" for inputs that divide by 3, but not by 5', function() {
    const normalCases1 = [
      {num: 3, expected: "fizz"},
      {num: 12, expected: "fizz"},
      {num: -6, expected: "fizz"}
    ];
    normalCases1.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should output "buzz" for inputs that divide by 5, but not by 3', function() {
    const normalCases2 = [
      {num: 5, expected: "buzz"},
      {num: 20, expected: "buzz"},
      {num: -10, expected: "buzz"}
    ];
    normalCases2.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should output "fizzbuzz" for inputs that divide by 3 AND 5', function() {
    const normalCases3 = [
      {num: 0, expected: "fizz-buzz"},
      {num: 15, expected: "fizz-buzz"},
      {num: -30, expected: "fizz-buzz"}
    ];
    normalCases3.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should output the input, for inputs that dont divide by 3 or 5', function() {
    const normalCases4 = [
      {num: 1, expected: 1},
      {num: 7, expected: 7},
      {num: -4, expected: -4},
      {num: -3.1, expected: -3.1}
    ];
    normalCases4.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  //Now we test for errors:
  it('should raise error if input is not a number', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      'a',
      '1',
      false
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});