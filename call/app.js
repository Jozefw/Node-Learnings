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