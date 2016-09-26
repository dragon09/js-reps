console.log('window is ready');

//ROUND 1-Dont' totally understand how this one works

var lengths = ["beer", "tequila", "rum"]

function count(arrayofStrings) {
  var i = 0
  var myArray = []

  while (i <= arrayofStrings.length - 1) {
    myArray.push(arrayofStrings[i].length);
    i++
  }
  return myArray
}
count(lengths)


//ROUND 2-YAAAY!
function transmogrifier(num1, num2, num3) {
  return Math.pow((num1 * num2), num3);
}

console.log(transmogrifier(5, 4, 3));
console.log(transmogrifier(13, 12, 5));
console.log(transmogrifier(13, 12, 5));
console.log(transmogrifier(42, 13, 7));



//ROUND 3-
function toonify(accent, sentence) {
  if (accent == 'daffy') {
    return sentence.replace(/s/g, "th");
  } else if (accent == 'elmer') {
    return sentence.replace(/r/g, "w");
  } else {
    return sentence;
  }
}
toonify('elmer', "rabbit rifle robert");
"wabbit wifle wobewt"
toonify('daffy', "sausauge smell soda");
"thauthauge thmell thoda"


// var something = "so you smell like sausage";
// var crazySentence = "rain in loraine";
// var newSentence = something.replace(re, "th");
// var rep = /r/gi;
// var anotherSentence = crazySentence.replace(rep, "w");
// console.log(newSentence);
// console.log(anotherSentence);

ß

//ROUND 4-YES!!!!
var myString = 'Hello World. How are you doing?';
function wordReverse(arg1) {
    var splits = myString.split(' ');
    var plsWork = [];
    for (var i = arg1.length - 1; i >=0; i--) {
        plsWork.push(arg1[i]);
    }
    return plsWork;
}

console.log(splits);


splits.reverse();




//ROUND 5-YAAAAAY!!!!!!
function reverseString(str) {
  return  str.split('').reverse().join('');
}
reverseString('time to make the donuts');



//ROUND 6-WOOHOO!!!!

var longArray = ["china", "japan", "russia", "mongolia"];
var count = 0;
var longestWord = " ";

for (var i = 0; i < longArray.length; i++) {
    if (longArray[i].length > count) {
    largest = longArray[i].length;
    longestWord = longArray[i];
    }
}
console.log("The longest word is "+ longestWord);
console.log("The length of the word is " + largest);


//FINAL ROUND-Not sure how to do this one
function repMaster(arg1, arg2) {
  var items = ("i finished this practice");
  var newItems = items.concat(" proves that I am a repMASTER!");
  console.log(newItems);
}
