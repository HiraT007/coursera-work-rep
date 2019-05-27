//Contents of script.js inside of an IIFE
(function () {

//Creates an array
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

//Loops over names array and say either 'Hello' or "Good Bye"
//using helloSpeaker's or byeSpeaker's
// 'speak' method.
for (var i = 0; i < names.length; i++) {

  //Retrieves the first letter of the current name in the loop. 
  //Compares with either upper case or lower case 'J'/'j' using
  //string object's 'toLowerCase' method
  var firstLetter = names[i].charAt(0).toLowerCase();

  // Compare the 'firstLetter' to lower case'j'. If same, calls byeSpeaker's 'speak' method 
  //with current name in loop. Otherwise, calls helloSpeaker's 'speak' method with current
  // name in the loop.
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();
