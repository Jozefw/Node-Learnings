var util = require('util');

function Person(){
	this.firstName ="Henry";
	this.lastName ="Just Henry"
}

Person.prototype.greet= function (){
	console.log("Hello " + this.firstName + " " + this.lastName )
}

function Police() {
	this.badgeNumber = 'B26354';
}

util.inherits(Person, Police);




var obj = {
	name: "Joe Cool",
	greet: function(){
		console.log(`Oi, good day ${this.name}`)
	}
}

var person = {
	name: 'mark anthony',
	first: "mark",
	last: "anthony",
	full: function(){
		console.log( 'Hello ' + this.first + " " + this.last)
	}
} 

obj.greet();
obj.greet.call(person);
person.full.call({first: 'mary',last: 'harry'});


