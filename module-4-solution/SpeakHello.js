//Contents of SpeakHello.js inside of an IIFE
(function(window){
	
	//Creates 'helloSpeaker' object and attaches "speak" method to it
	//Also, exposed to the global context
	var helloSpeaker = new Object();

	//Creates speakWord variable 
	var speakWord = "Hello";

	//'speak' function is attached to helloSpeaker object
	helloSpeaker.speak= function (name) {
	  console.log(speakWord + " " + name);
	}
	
	//'helloSpeaker' object has global scope. 
	window.helloSpeaker = helloSpeaker;

})(window);

