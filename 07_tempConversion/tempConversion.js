const convertToCelsius = function(fahrenheit) {
  let celsius = (5 / 9) * (fahrenheit - 32);
  celsius =  Math.round(10 * celsius) / 10;
  return celsius;
};

function convertToFahrenheit(celsius) {
  let fahrenheit = (celsius * (9 / 5)) + 32;
  fahrenheit =  Math.round(10 * fahrenheit) / 10;
  return fahrenheit;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
