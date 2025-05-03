<!DOCTYPE html>
<html>
<head>
  <title>Sum of Two Numbers</title>
</head>
<body>
  <h2>Sum Calculator</h2>

  <label>Enter first number:</label>
  <input type="number" id="num1"><br><br>

  <label>Enter second number:</label>
  <input type="number" id="num2"><br><br>

  <button onclick="calculateSum()">Calculate Sum</button>

  <p id="result"></p>

  <script>
    function calculateSum() {
      let number1 = parseFloat(document.getElementById("num1").value);
      let number2 = parseFloat(document.getElementById("num2").value);
      let sum = number1 + number2;
      document.getElementById("result").innerText = "The sum is: " + sum;
    }
  </script>
</body>
</html>
