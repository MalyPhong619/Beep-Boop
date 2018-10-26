//  Business Logic
function arrayOfNumbers(numbers, name) {
  var numberArray = [];
  for(var i = 0; i <= numbers; i++) {
    if (i === 0) {
    numberArray.push("Beep!");
  } else if (i === 1) {
    numberArray.push("Boop!");
  } else if (i % 3 === 0) {
    numberArray.push("Im Sorry " + name + ", I'm afraid I cannot do that!")
  }
  }
  return numberArray;
};






// UI Logic
$(document).ready(function() {
  $(".userInput").submit(function(event) {
    event.preventDefault();
    var userName = $("#userName").val();
    var inputNumber = parseInt($("#inputNumber").val());

    var resultArray = arrayOfNumbers(inputNumber, userName);
    console.log(inputNumber, resultArray);
    $("#translatedNumbers").append(resultArray);
  });
});
