// require will look for a file with the required name, if it doesnt exist it will look for a file with that name and then look for an INDEX.JS file

var english = require ('./english.js');
var spanish = require ('./spanish.js');

// make this a module available to app.js

module.exports = {
	english:english,
	spanish:spanish,
}