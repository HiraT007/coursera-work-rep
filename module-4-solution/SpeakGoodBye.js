//Contents of SpeakGoodBye.js inside of an IIFE
(function(window){
	
	//Creates 'byeSpeaker' object and attaches "speak" method to it
	//Also, exposed to the global context
	var byeSpeaker = new Object();

	//Creates speakWord variable 
	var speakWord = "Good Bye";

	//'speak' function is attached to byeSpeaker object
	byeSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	}
	
	//'byeSpeaker' object has global scope.
	window.byeSpeaker = byeSpeaker;

})(window);
