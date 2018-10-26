//  Business Logic
function arrayOfNumbers(numbers, name) {
  var numberArray = [];
  for(var i = 0; i <= numbers; i++) {
    if (i === 0) {
      numberArray.push("Beep");
    } else if (i === 1) {
      numberArray.push("Boop");
    } else if (i % 3 === 0) {
      numberArray.push("Im Sorry " + name + ", I'm afraid I cannot do that!")
    } else {
      numberArray.push(i);
    }
  }
  return numberArray.join(", ");
};






// UI Logic
$(document).ready(function() {
  $(".userInput").submit(function(event) {
    event.preventDefault();
    var userName = $("#userName").val();
    var inputNumber = parseInt($("#inputNumber").val());

  if (inputNumber >= 0) {
    if (userName) {
    var resultArray = arrayOfNumbers(inputNumber, userName);
    console.log(inputNumber, resultArray);
    } else {
      alert("Please make sure to enter your Name");
    }
  } else {
    alert("Please make sure input number is an integer >= 0")
  }

    $("#translatedNumbers").text(resultArray);
  });
});
