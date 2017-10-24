var emitter = require('./emmiter');
var emtr = new emitter();

// property name on an object, so let's put it in quotes
emtr.on('click', function(){
	console.log("yikes, is this working");
});

emtr.on('click',function(){
	console.log("another function");
})

emtr.emit('click');