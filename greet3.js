// add a new method onto module....amybe instead of exports? reember any reference to this constructor is cached
function Greetr(){
	this.title = "jammin",
	this.Greetingz = function(){
		console.log("welcome from inside a constructor 3");
	}
}

module.exports = new Greetr();