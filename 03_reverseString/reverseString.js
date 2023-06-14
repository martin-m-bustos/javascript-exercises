const reverseString = function(str) {
  const myArray = str.split("");
  let i = str.length - 1;
  let newStr = "";
  while (i >= 0) {
    newStr += myArray[i];
    i--;
  }
  return newStr;
};

// Do not edit below this line
module.exports = reverseString;
