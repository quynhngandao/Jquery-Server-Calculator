// express and body-parser
const express = require("express");
const bodyParser = require("body-parser");

// global variable
let results = [];

// use express
const app = express();
// use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// port
const PORT = 5000;

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static("server/public"));

// GET
app.get("/calculator", function (req, res) {
  console.log("request for /calculator was made");

  // send data to client
  res.send(results);
});

// POST
app.post("/calculator", function (req, res) {
  console.log("In POST request, here is the data for each round: ", req.body);

  const number = req.body;

  console.log("Result: ", operation(number));

  // push data to req.body
  results.push(req.body);

  // send response to client
  res.sendStatus(201);
});

// switch:break statement
function operation(number) {
  let result = "";
  switch (number.operator) {
    case "+":
      number.result = Number(number.input1) + Number(number.input2);
      break;
    case "-":
      number.result = number.input1 - number.input2;
      break;
    case "*":
      number.result = number.input1 * number.input2;
      break;
    case "/":
      number.result = number.input1 / number.input2;
      break;
  }
  // result = result.number
  return result;
}

//   // DELETE
// app.delete('/calculator:index', function (req, res) {
//   console.log('in /calculator delete:', req.params.index);

//   // send response to client
//   res.sendStatus(201);
// })

// Start server
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
