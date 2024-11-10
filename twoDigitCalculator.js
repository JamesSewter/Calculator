const twoDigitCalculator = (op) => {
    
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  let result = 0;
  // Check if inputs are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers!");
    return;
  }
  switch (op) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    default:
      result = "Invalid operation please try +/-/%/*";
  }
  // Display the result
  document.getElementById("result").innerText = result;
};

// module.exports = twoDigitCalculator;
