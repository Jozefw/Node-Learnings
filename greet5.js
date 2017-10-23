// Revealing module pattern 

var greetingPerson = "Hey there dude";

function greetThem (){
	console.log(greetingPerson);
	console.log("inside greetThem");
}

module.exports = {
	greetThem: greetThem,
}

