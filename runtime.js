const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// ==================================================================

// Part 3 - write code for javascript problems

// Problem 1 - Sum Zero: Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// this solution has runtime complexity O(n^2)

// write the function 
// call the function with test cases

// edgecases 
  // if array is empty - return false
  // if array contains anything other than numbers - return false

// outer for loop - variable will be i 
    // inner for loop - variable will be j
        // evaluate if i + j = 0
            // if it does, return true

// return false

const addToZero = (arr) => {

    if (arr.length === 0) {
      console.log("arr is empty")
      return false
    }
  
    for (let i of arr) {
      for (let j of arr) {
        if (i + j === 0) {
          return true;
        }
      }
    }
  
    return false;
  };
  
  
  // test arrays
  const testArr1 = [1,2,3,4] 
    // should return false
  const testArr2 = [1,2,3,-2] 
    // should return true
  const testArr3 = [] 
    // should return false
  
  addToZero(testArr3);


// ========================================================

// Problem 2 - Unique Characters: Write a function that takes a single word as a string. It should return true if that word contains only unique characters. Return false otherwise. 

// write function that takes one parameter(string)
// call that function with a few different test strings

// this solution has O(n) runtime complexity

// edgecases
  // if string is empty should return false
  // all characters need to be the same case

// empty character map object

// loop through string with a for of loop
  // if that character exists, increment it, otherwise set its value to 1

// loop through character map
  // check if any values are > 1  
    // if they are, return false

// return true;

const hasUniqueChars = (str) => {

    if (!str) {
      return false;
    }
  
    let chars = {};
  
    for (let char of str.toLowerCase()) {
      chars[char] = chars[char] + 1 || 1;
    }
  
    for (let key in chars) {
      if (chars[key] > 1) {
        return false;
      }
    }
  
    return true;
  } ;
  
  const testStr1 = "abcdef"
    // should return true
  const testStr2 = "abcabc"
    // should return false
  const testStr3 = "Carter"
    // should return false
  const testStr4 = ""
    // should return false
  
  hasUniqueChars(testStr3);

// ========================================================

// Problem 3 - Pangram Sentence: A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// this soltution has O(n) runtime complexity

// write function called isPangram that accepts string as parameter
// call function with several test cases

// edgecases
  // if the string is empty return false

// setup default character map with every character in the alphabet as the key and value of 0

// split the string .split("")
  // that will return an array of every character

// loop over the array and populate the character map 

// loop over the character map 
  // if any values equal 0 return false

// return true;

const isPangram = (str) => {
  
    if (str.length === 0) {
      return false;
    }
  
    let charMap = {
      "a": 0,
      "b": 0,
      "c": 0,
      "d": 0,
      "e": 0,
      "f": 0,
      "g": 0,
      "h": 0,
      "i": 0,
      "j": 0,
      "k": 0,
      "l": 0,
      "m": 0,
      "n": 0,
      "o": 0,
      "p": 0,
      "q": 0,
      "r": 0,
      "s": 0,
      "t": 0,
      "u": 0,
      "v": 0,
      "w": 0,
      "x": 0,
      "y": 0,
      "z": 0,
    }
  
    let strAsSplitArr = str.toLowerCase().split("");
  
    for (let char of strAsSplitArr) {
      charMap[char] = charMap[char] + 1 || 1;
    }
  
    for (let key in charMap) {
      if (charMap[key] === 0) {
        return false;
      }
    }
  
    return true;
  };

  
  const testStr1 = "The quick brown fox jumps over the lazy dog!";
    // should return true
  const testStr2 = "I like cats, but not mice";
    // should return false
  const testStr3 = "";
    // should return false
  
  isPangram(testStr3);

// ========================================================

// Problem 4 - Longest Word: Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// this solution has O(n) runtime compelexity

// write the function called findLongestWord that has a parameter of an array
// call that function with a few different test cases

// edgecases
  // if array is empty, return "array is empty"

// declare variable called currentLongestStr = 0;

// use for of loop to go through the array
  // get the length of that particular string
  // compare that length to currentLongestStr
    // if it's greater, set currentLongestStr = the length that i just found

// return currentLongestStr;

const findLongestWord = (arr) => {

    if (arr.length === 0) {
      return "The array is empty";
    }
  
    let longestStrLength = 0;
  
    for (let str of arr) {
      let currentLength = str.length;

      if (currentLength > longestStrLength) {
        longestStrLength = currentLength
      }
    }
  
    return longestStrLength;
  };
  
  
  testArr1 = ["hi", "my", "name", "is", "carter"];
    // should return 6
  testArr2 = ["hello", "world"];
    // should return 5
  testArr3 = ["asdfkljasdflkj", "abc"];
    // should return 14
  testArr4 = ["coding", "is", "fun"];
    // should return 6
  testArr5 = [];
    // "array is empty"
  
  findLongestWord(testArr5);