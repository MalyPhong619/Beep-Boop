//  Business Logic
function arrayOfNumbers(numbers) {
  var numberArray = [];
  for(var i = 0; i <= numbers; i++) {
    numberArray.push(i);
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
