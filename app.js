// getting all the greets functions like this is uneseccary since require will look for a greet file and then a greet folder and then the index.js in that folder....so we can just ask for the greet folder
// var greets = require ('./greet/index.js');
var greets = require('./greet');

greets.spanish();
greets.english();