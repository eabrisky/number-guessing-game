const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// new array to hold guess inputs
let guess = [];

// second array to hold results of numEval
let results = [];


let randNum = randomNumber(1,25);
console.log(randNum);





// function numEval(){
//   console.log(`we made it to numEval 😎, ${guess[0].userOne}`);
//   // for (let user in guess) {
//   //   console.log(`${user}: ${guess[user]}`);
//   // }
  
//   if (guess[0].userOne == randNum){
//     console.log('user1 IS CORRECT!!');
//   } else {
//     console.log('userOne wrong');
//   }
  
//   if (guess[0].userTwo == randNum){
//     console.log('user2 IS CORRECT!!');
//   } else {
//     console.log('userTwo wrong');
//   }
  
//   if (guess[0].userThree == randNum){
//     console.log('user3 IS CORRECT!!');
//   } else {
//     console.log('userThree wrong');
//   }
  
//   if (guess[0].userFour == randNum){
//     console.log('user4 IS CORRECT!!');
//   } else {
//     console.log('wow, nobody got it? really..?');
    
//   } // end if equal to


function numEval(){
  console.log(`we made it to numEval :sunglasses:`);
  // for (let user in guess) {
  //   console.log(`${user}: ${guess[user]}`);
  // }
  if (guess[0].userOne == randNum){
    guess[0].userOne.isCorrect= 'YOU DID IT WOW UR A CRAZY PERSON AHHHHH';
    results.push(guess[0].userOne);
  } else if (guess[0].userOne > randNum){
    guess[0].userOne.isCorrect= 'User One is too high';
    results.push(guess[0].userOne);
  } else if (guess[0].userOne < randNum){
    guess[0].userOne.isCorrect= 'User One is too low';
    results.push(guess[0].userOne);
  } else {
    null;
  }
  if (guess[0].userTwo == randNum){
    guess[0].userTwo.isCorrect= 'YOU DID IT WOW UR A CRAZY PERSON AHHHHH';
    results.push(guess[0].userTwo);
  } else if (guess[0].userTwo > randNum){
    guess[0].userTwo.isCorrect= 'User Two is too high';
    results.push(guess[0].userTwo);
  } else if (guess[0].userTwo < randNum){
    guess[0].userTwo.isCorrect= 'User Two is too low';
    results.push(guess[0].userTwo);
  } else {
    null;
  }
  if (guess[0].userThree == randNum){
    guess[0].userThree.isCorrect= 'YOU DID IT WOW UR A CRAZY PERSON AHHHHH';
    results.push(guess[0].userThree);
  } else if (guess[0].userThree > randNum){
    guess[0].userThree.isCorrect= 'User Three is too high';
    results.push(guess[0].userThree);
  } else if (guess[0].userThree < randNum){
    guess[0].userThree.isCorrect= 'User Three is too low';
    results.push(guess[0].userThree);
  } else {
    null;
  }
  if (guess[0].userFour == randNum){
    guess[0].userFour.isCorrect= 'YOU DID IT WOW UR A CRAZY PERSON AHHHHH';
    results.push(guess[0].userFour);
  } else if (guess[0].userFour > randNum){
    guess[0].userFour.isCorrect= 'User Four is too high';
    results.push(guess[0].userFour);
  } else if (guess[0].userFour < randNum){
    guess[0].userFour.isCorrect= 'User Four is too low';
    results.push(guess[0].userFour);
  } else {
    null;
  }
  console.log(results);
} // end numEval

  
// } // end numEval

// GET & POST Routes go here

// Post is for adding data
// add the incoming number guesses 
// send back a good response
// req.body is made by body-parser
app.post('/guess', (req, res) => {
  console.log(req.body);
  guess.push(req.body);
  // send back a good response
  res.sendStatus(201);

  numEval();
})

app.get('/guess', (req, res) => {
  console.log('got to /guess');
  res.send(guess);
})

//second get

// result = numEval();
// app.get('/guess', (req, res) => {
//   console.log('got to /result');
//   res.send(result);
// })




app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
};

module.exports = {numEval :numEval};