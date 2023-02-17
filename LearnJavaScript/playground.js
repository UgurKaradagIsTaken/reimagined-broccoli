// LECTURE 1
/*
var number = 5;
number = 4;
*/ 

/*
// LECTURE 2
var myName = "Ugur"
myName = 8
let ourName = "FreeCodeCamp"
const pi = 3.14
*/
/*

// LECTURE 3
 var a;
 var b = 2;
 console.log(a); //undefined is null
 a = 7;
 b = a;
 console.log(a);
 console.log(b);
 */

 // LECTURE 4
/*
 var a = 9;
  var a;
  var b;
  var c;
  a = 5;
  b = 10;
  c = "I am a string";

  a = a + 1;
  b = b + 5;
  c = c + " Yay";
  console.log(a);
  console.log(b);
  console.log(c);
  */
 // Lecture 5
/*
 var studyCapVar;
 var properCamelCase;
 var titleCaseOver;

 studyCapVar = 10;
 properCamelCase = "A string";
 titleCaseOver = 9000;
 */

 // Lecture 6
/*
 var sum = 10 + 10;
 console.log(sum)
 var difference = 45 - 33;
 console.log(difference);
 var product = 8 * 10;
 console.log(product);
 var quotient = 66 / 33;
 console.log(quotient);
 var myVar = 87;
 myVar = myVar + 1;
 console.log(myVar);
 myVar++;
 console.log(myVar);
 myVar--;
 console.log(myVar);
*/

// Lecture 7
/*
var myDecimal = 0.009;
var product = 2.0 * 2.5;
console.log(product)
var quotient = 4.4 / 2.0;
console.log(quotient);
var remainder;
remainder = 11 % 3;
console.log(remainder);
*/
// Lecture 8
/*
var a = 3;
var b = 17;
var c = 12;

a = a + 12;
b = b + 9;
c = 7 + c;

a += 12;
b += 9;
c += 7;

a = a - 6;
b = b- 5;
c = c- 10;

a -= 6;
b -= 15;
c -= 1;

a = a * 5;
b = b * 10; 
c = c * 3;

a *= 5;
b *= 3;
c *= 10;

a = a / 12;
b = b / 4;
c = c / 11;

a /= 12;
b /= 4;
c /= 11;
*/

// Lecture 9
/*
var firstName = "Alan";
var lastName = "Turing";

var myFirstName = "Ugur";
var myLastName = "Kara";

var myStr = "Example of a \"double quoted\" string"
console.log(myStr);
var myStrExample = 'Example of a "double quoted" string 2'
console.log(myStrExample);
var myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr3);

var exampleStr = "I come first." + "I come second";
var exampleStr2 = "This is the start. " + "This is the end ";
console.log(exampleStr);
console.log(exampleStr2);
exampleStr2 += "Concatenate new line";
console.log(exampleStr2);

var ourName = "freeCodeCamp";
var ourStr = "Hello our name is " + ourName + ", how are you?";
var myName = "Ugur";
var myStr4 = "My name is " + myName + " and I am well!";
console.log(myStr4);
*/

// Lecture 10
/*
var someAdjective;
var myStr = "Learning to code is "
someAdjective = "Worthwhile";
myStr += someAdjective;
console.log(myStr);
var firstName = "Ada";
var lastName = "Lovelace";
var lastNameLength = lastName.length;
console.log(lastNameLength);
var firstLetterOffFirstName = firstName[0];
var secondLetter;
secondLetter = lastName[0];
console.log(secondLetter);
var myString = "Jello World!"
myString[0] = "H";
console.log(myString);
var lastLetterOfName = lastName[lastName.length - 1];
console.log(lastLetterOfName);

*/
// Lecture 11 
/*
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
var result = "";

result += "The " + myAdjective  + " " + myNoun + " " + myVerb + " to the store " + myAdverb; 


return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

var ourArray = ["John", 23];
var myArray = [];
myArray = ["Quincy", 1];
var nestedArray = [["The universe", 42] ,["everything", 101010]];
var myArray2 = [["The bulls", 23],["White sox", 21]];
var ourArray = [50,60,70];
var ourData = ourArray[2];
console.log(ourData);

ourArray[1] = 45;
console.log(ourArray);

var multiArray = [[1,2,3],[4,5,6],[7,8,9]];
var myMultiData = multiArray[2][1];
console.log(myMultiData);
var exampleArray = ["Stimpson", "J", "cat"];
exampleArray.push(["happy","joy"]);
var myArray3 = [["John, 23"], ["Cat",2]];
myArray3.push(["dog", 3]);
console.log(myArray3);
*/

// Lecture 12
/*
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
console.log(removedFromOurArray);
console.log(ourArray);
var myArray = [[1,2,3], [4,5,6]];
myArray.pop();
console.log(myArray);
var ourArray2 = ["Stimpson", "J",["Cat"]];
ourArray2.shift();
console.log(ourArray2);
var myArray2 = [["john",23], ["dog",3]];
var removedFromMyArray2 = myArray2.shift();
console.log(removedFromMyArray2);
console.log(myArray2);
ourArray2.unshift("Happy");
myArray2.unshift(["Paul", 35]);
console.log(myArray2);
*/

// Lecture 13
/*
var myList = [["Cereal",3], ["Milk", 2], ["bananas", 3], ["Juice", 2]]; //Shopping list yayy!!

function ourReusableFunction() {
  console.log("Hello World!");
}
ourReusableFunction();
ourReusableFunction();
ourReusableFunction();

function reusableFunction() {
  console.log("Hi Wordl!");
}
reusableFunction();

function ourFunction(a,b) {
  console.log(a - b);
}
ourFunction(10,5);
function functionWithArgs(a,b) {
  console.log(a + b);
}
functionWithArgs(10,20);
*/
// Lecture 14 Global scope important
/*
var myGlobal = 10;

function f1() {
  oopsGlobal = 5;
}


function fun2() {
  var output = "";
  if(typeof myGlobal != "undefined") {
    output += "myGlobal : " + oopsGlobal;
  }
  if(typeof oopsGlobal != "undefined") {
    output += " oopsglobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();
*/
// Lecture 15

function myLocalScope() {
   myVar = 5;
  console.log(myVar);
} 
myLocalScope();
console.log(myVar);
var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "Sweater";
  return outerWear;

}
console.log(myOutfit());
console.log(outerWear);

function minusSeven(num) {

return num - 7;
}
console.log(minusSeven(10));


function timesFive(num) {
  return num * 5;

}
console.log(timesFive(5));


var sum = 0;

function addThree() {
  sum += 3;
}
addThree();
console.log(sum);