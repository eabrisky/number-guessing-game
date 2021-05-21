// const express = require('express');
// const app = express();
// app.use(express.static('server/public'));

// let numEval = require('./server/server.js');

// console.log(numEval);

$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  
  // click Listeners
  $('#submitButton').on('click', addGuess);

  //randomNumber.randomNumber(1,25);

}

function addGuess() {
  // gather the input functions
  let newGuess = {
    userOne: $('#guess1').val(),
    userTwo: $('#guess2').val(),
    userThree: $('#guess3').val(),
    userFour: $('#guess4').val()
  };
  // go to server route /guess
  $.ajax({
    method: 'POST',
    url: '/guess',
    data: newGuess
  }).then(function (response){
    // console log the response
    console.log(response);
    // get the guesses?
    getGuess();
  })

  //numEval();
}

function getGuess(){
  
  $.ajax({
    method: 'GET',
    url: '/guess'
  }).then(function (response){
    $('#history').empty();
  for(guess of response){
      $('#history').append(`
        <p>${guess.userOne}</p>
        <p>${guess.userTwo}</p>
        <p>${guess.userThree}</p>
        <p>${guess.userFour}</p>
      `)
  }
  alert("Hello");
  })
}