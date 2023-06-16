const convertToCelsius = function(degF) {
  let degreeC;
  degreeC = (degF - 32) * (5/9);
  dC = Number(degreeC.toFixed(1));
  return dC;
};

const convertToFahrenheit = function(degC) {
  let degreeF;
  degreeF = degC * (9/5) + 32;
  dF = Number(degreeF.toFixed(1));
  return dF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
