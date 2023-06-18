$(document).ready(onReady);

function onReady() {
  getAnswer();

  // equal button
  $("#equal-btn").on("click", postAnswer);

  // // clear button
  $("#clear-btn").on("click", deleteAnswer);

  // operator button
  $("#add-btn").on("click", add);
  $("#subtract-btn").on("click", subtract);
  $("#multiply-btn").on("click", multiply);
  $("#divide-btn").on("click", divide);
}

let operation = "";

function add() {
  operation = "+";
  // console.log("+", operation);
}

function subtract() {
  operation = "-";
  // console.log("-", operation);
}

function multiply() {
  operation = "*";
  // console.log("time",operation);
}

function divide() {
  operation = "/";
  // console.log("divide", operation);
}

// postAnswer()
function postAnswer(e) {
  e.preventDefault();
  console.log("operation", operation);
  // data object
  let number = {
    input1: $("#input-one").val(),
    input2: $("#input-two").val(),
    operator: operation,
  };

  // AJAX POST request send data object to server
  $.ajax({
    type: "POST",
    url: "/calculator",
    data: number,
  })
    // server response OK
    .then(function (response) {
      // clear input data
      $("#number-input").val("");

      // call getAnswer()
      getAnswer();
    })

    // error sending data
    .catch(function (error) {
      alert("Error sending data");
      console.log(error);
    });
}

// getAnswer()
function getAnswer() {
  // AJAX request data from server
  $.ajax({
    type: "GET",
    url: "/calculator",
  })
    .then(function (response) {
      // render()
      render(response);
    })
    .catch(function (error) {
      alert("Unable to get messages");
      console.log(error);
    });
}

// // deleteAnswer()
function deleteAnswer() {
  $.ajax({
    type: "DELETE",
    url: "/calculator",
  })
    .then(function (response) {
      // call getAnswer()
      getAnswer(response);

      // error deleting data
    })
    .catch(function (error) {
      console.log(error);
      alert("Unable to delete data");
    });
}

// render() to dom
function render(response) {
  // empty result data
  $("#result-data").empty();

  // append result data
  for (let number of response) {
    $("#result-data").append(`
    <p>${number.result}</p>
    <li> ${number.input1} ${number.operator} ${number.input2} = ${number.result} </li>
    `);
  }
}
