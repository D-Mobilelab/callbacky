Callbacky.init({
	logger: console
});



Callbacky.bind('red', function(){
	console.log("this color is red");
});

Callbacky.trigger('red');



Callbacky.bind('blue', function(){
	console.log("this color is blue");
});

Callbacky.bind('blue', function(){
	console.log("yes! this color is blue!")
});

Callbacky.trigger('blue');



Callbacky.bind('color', function(color){
	console.log("oh, but this color is " + color);
});

var triggerColor = function(){
	var color = document.getElementById('colorName').value;
	Callbacky.trigger('color', color);
}