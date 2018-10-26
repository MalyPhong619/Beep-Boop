//  Business Logic
function arrayOfNumbers(numbers, name) {
  var numberArray = [];
  for(var i = 0; i <= numbers; i++) {
    if (i % 3 === 0 && i != 0) {
      numberArray.push("Im Sorry " + name + ", I'm afraid I cannot do that");
    } else if (i === 0 || i.toString().includes("0")) {
      numberArray.push("Beep");
    } else if (i === 1 || i.toString().includes("1")) {
      numberArray.push("Boop");
    } else {
      numberArray.push(i);
    }
  }; 2000;
  return numberArray.join("! ");
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
      $(".userInput").hide();
      $("#translatedNumbers").show();
    } else {
      alert("Please make sure to enter your Name");
    }
  } else {
    alert("Please make sure input number is an integer >= 0")
  }

  var splitArray = resultArray.split("");
  // for (var j = 0; j <= splitArray.length; ++j){
  //   $("#translatedNumbers").append(j);
  // }; 2000;
  // console.log(j);
  $("#translatedNumbers").text(resultArray);

  });
});
