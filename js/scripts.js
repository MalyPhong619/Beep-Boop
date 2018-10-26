//  Business Logic
function arrayOfNumbers(numbers) {
  var numberArray = [];
  for(var i = 0; i <= numbers; i++) {
    if (i === 0) {
    numberArray.push("Beep!");
  } else if (i === 1) {
    numberArray.push("Boop!");
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

    var resultArray = arrayOfNumbers(inputNumber);
    console.log(inputNumber, resultArray);
    $("#translatedNumbers").append(resultArray);
  });
});
