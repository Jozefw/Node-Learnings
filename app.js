// REQUIRE RETURNS THE MODULE.EXPORTS !!!!!!!!
// getting all the greets functions like this is uneseccary since require will look for a greet file and then a greet folder and then the index.js in that folder....so we can just ask for the greet folder
// var greets = require ('./greet/index.js');
var greets = require('./greet');
var greet = require('./greet1');
// get a particular property or method
var greeter = require('./greet2.js').greetery;
// get the new method on exports
var greetr = require('./greet3');
// make a constructor
var GreetrConstructor = require('./greet4');

var greetingPeople = require('./greet5');

greets.spanish();
greets.english();

greet();
// greeter.greeter();
greeter();

greetr.Greetingz();
var greetr4 = new GreetrConstructor(); 
greetr4.Greetingz();

greetingPeople.greetThem();