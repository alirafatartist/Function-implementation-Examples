const multiply = (a, b) => {return a * b;}; // 14
const multiply2 = (a, b) => {a * b;}; // undefined
const multiply3 = (a, b) => a * b; // 14


// Anonymous Function Invocation (IIFE):
(function () {
  console.log("I am invoked immediately!");
})();

const process = {
  reverseString: function (text) {
    return text.split("").reverse().join("");
  },
  capitalizeFirstLetter: function (text) {
    return text[0].toUpperCase() + text.slice(1);
  },
  calculateWordLength: function (text) {
    return text.length;
  },
  isPalindrome: function (text) {
    if (text[0] === text[text.length - 1]) {
      return true;
    } else {
      return false;
    }
  },
  countVowels: function (text) {
    let n = 0;
    for (let i = 0; i < text.length; i++) {
      if (
        text[i].toLowerCase() === "i" ||
        text[i].toLowerCase() === "a" ||
        text[i].toLowerCase() === "o" ||
        text[i].toLowerCase() === "u" ||
        text[i].toLowerCase() === "e"
      ) {
        n++;
      }
    }
    return n;
  },
  titleCase: function (text) {
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      let wordsj = words[i];
      console.log(wordsj[0].toUpperCase() + wordsj.slice(1));
    }
  },
  findMaxWordLength: function (text) {
    let words = text.split(" ");
    let array1 = [];
    for (let i = 0; i < words.length; i++) {
      console.log(`${words[i]} >> ${words[i].length}`);
      array1.push(words[i].length);
    }
    console.log(`the larger word is ${Math.max(...array1)} letters`);
  },
  truncateString: function (text, length) {
    let array1 = [];
    for (let i = 0; i < length; i++) {
      array1.push(text[i]);
    }
    let text2 = array1.join("");
    console.log(text2);
  },
};
console.log(process.reverseString("hello world"));
console.log(process.capitalizeFirstLetter("hello world"));
console.log(process.calculateWordLength("hello world"));
console.log(process.isPalindrome("racecar"));
console.log(process.countVowels("racecar"));
console.log(process.titleCase("hello world"));
console.log(
  process.findMaxWordLength("The quick brown fox jumped over the lazy dog")
);
console.log(process.truncateString("hello world", 7));