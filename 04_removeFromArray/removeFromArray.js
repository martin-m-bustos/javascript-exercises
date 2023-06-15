const removeFromArray = function(arr, ...removeArgs) {
  const myArray = [];
    arr.forEach((item) => {
      if(!removeArgs.includes(item)) {
        myArray.push(item);
      }
    })
  return myArray;
}

// Do not edit below this line
module.exports = removeFromArray;
