const sumAll = function(num1, num2) {
  let sum = 0;
  if (typeof num2 != "number" || typeof num1 != "number") {
    sum = "ERROR";
  } else if (num1 < 0 || num2 < 0) {
      sum = "ERROR";
  } else if (num2 > num1) {
      let i = num1; let j = num2;
      while (i <= j) {
        sum += i;
        i++;
      }
  } else if (num1 > num2) {
      let i = num1; let j = num2;
      while (i >= j) {
        sum += i;
        i--;
      }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
