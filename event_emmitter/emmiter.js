// make a function constructor so you can many many event emitters
function Emitter (){
	this.events = {
	};
}

Emitter.prototype.on = function(type, listener){
	// make a property on events object
	this.events[type] = this.events[type] || [];
	// LISTENER is going to be a function, so we push the function into the array
	this.events[type].push(listener);
}

Emitter.prototype.emit = function(type){
	if(this.events[type]){
		this.events[type].forEach(function(listener){
			listener();
		})
	}
}

module.exports = Emitter;