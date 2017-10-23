// add a new method onto module....maybe instead of exports? 
// remeber any reference to this constructor is cached except if you export the ability to make a new constructor and not just a new instance of the object.
function Greetr(){
	this.title = "jammin",
	this.Greetingz = function(){
		console.log("welcome from inside a constructor 4");
	}
}

module.exports = Greetr;