var EventEmitter = require('events');
var util = require('util'); 

// function constructor Greeter2
function Greeter2() {
	this.greeting = 'helo from Greeter2' ;
} 

// any objects created by Greeter2 have acces to EventEmmiter functions and properties
util.inherits(Greeter2,EventEmitter);

// we can still add additional functions and objects  as well
Greeter2.prototype.greetz = function(data){
	console.log(this.greeting);
	this.emit('greet', data);
}
var greeter1 = new Greeter2(); 

greeter1.on('greet',function(data){
	console.log("somobody greeted " + data );
})

greeter1.greetz("Joseephus");