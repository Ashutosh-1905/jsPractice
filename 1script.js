// Given a string, reverse each word in the sentence

var str = "Saare jaha se achha hindustaan hamara";
var savedStrArray = str.split(" ").map(function (word) {
  return word.split("").reverse().join("");
});
console.log(savedStrArray.join(" "));

//  how to check if an object is an array or not ?

function checkArray(elem) {
  return Array.isArray(elem);
}
console.log(checkArray([]));
console.log(checkArray({}));

// How to empty an array in javascript or
// Do not reset it to a new array and do not loop through to pop each value

var arr = [1, 2, 3, 4, 5, 6];
arr.length = 0;
console.log(arr);

// How would you chech if number is integer or not?

let int = 13.1;
if (int % 1 === 0) {
  console.log("Integer");
} else {
  console.log("Not integer");
}

// make this work  duplicate ([1,2,3,4,5]);
// [1,2,3,4,5,1,2,3,4,5]

function duplicate(value) {
  return value.concat(value);
}
console.log(duplicate([1, 2, 3, 4, 5]));

// how can revse a number
// shortcut

// function reverseKaro(num){
//     return Number (num.toString().split("").reverse().join(""));
// }
// console.log(reverseKaro(45));
// console.log(reverseKaro(12345));

// how can revse a number
// long way

function reverseKaro(num) {
  var rev = 0;
  while (num > 0) {
    var remender = num % 10;
    rev = rev * 10 + remender;
    num = Math.floor(num / 10);
  }
  return rev;
}
console.log(reverseKaro(54321));

// write a javascript function that checks whether a passed string is palindrom or not

function checkPalindrom(str) {
  var reversed = str.split("").reverse().join("");
  return reversed === str;
}
console.log(checkPalindrom("madam"));
console.log(checkPalindrom("Ashu"));

// write a javascript function that returns a passed string with letters in alphabetical order

function alphabetic(str) {
  var alpha = str.split("").sort().join("");
  return alpha;
}
console.log(alphabetic("apple"));
console.log(alphabetic("ashutosh"));
console.log(alphabetic("komal"));

// write  javascript function that accept a string as parameter and converts the first letter of each word of the string in upper case

function firstCapitalLetter(str) {
  var allWords = str.split(" ").map(function (word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
  // console.log(allWords);
  return allWords.join(" ");
}

console.log(firstCapitalLetter("ashu yaar kesa he"));
