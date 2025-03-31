let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');   //submit button
const userInput = document.querySelector('#guessField');   //User Input .... the empty input field where we are going to enter the number 
const guessSlot = document.querySelector('.guesses'); //previous guesses and displaying them......filling them like slots in an array
const remaining = document.querySelector('.lastResult'); 
const lowOrHi = document.querySelector('.lowOrHi'); 
const startover = document.querySelector('.resultParas');  //say user has used all their guesses 

const p = document.createElement('p')

let previousGuess = []  //the values submitted by the user is going to get stored in this array ....and we will display the whole array to the user - so that they have an idea to not guess the values displayed in the array
let numGuess = 1  //track how many attempts have been done

let playGame = true //this will allow us to play the game, say you have finished all the vents all the coins .....so without checking this consition we cannot move forward


//first we need to check if are available to play the game or not
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()  //hold the values i will provide you with them
        const guess = parseInt(userInput.value)  //taking the value from the input field and storing it in a variavle
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter a number greater than 1')
    }else if(guess > 100){
        alert('Please enter a number less than 100')
    }else{
        previousGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkguess(guess)
        }
    }
}  //to check whether the guess by user is an actual valid guess(not a letter, less than 1, more than 100 etc)

function checkguess(guess){
    if(guess === randomNumber){
        displayMessage('You guessed it right')
        endGame()
    }else if(guess < randomNumber){
        displayMessage('Number is TOOOO low')
    }
    else if(guess > randomNumber){
        displayMessage('Number is TOOOO high')
    }
} //to print a messasge that your value/guess is correct, low, high (or the value guessed is equal to random number if yes.....then using the displayMessage method tell the user that you have won)

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess ++;
    remaining.innerHTML = `${12 - numGuess}`
} //cleanup method.......this will clean you values ......because we have to input the next value and not take the same value , update the guess array, update the remaining guesses

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
} //this method will directly interact with the dom.....turn user value to empty because it has to guess next.....in the innerHTML we will add guess....and reduce the guesses remaining count

function endGame() {
    userInput.value = '';  //say user was on his 11th try whatever he had entered in the textbox is revtered to empty ......say 11th try was numebr 67 after entering it it does not add it to the previous guess array but declares it empty
    userInput.setAttribute('disabled', ''); //This makes the input box inactive so the user can’t type anything..........It’s like turning off a text field so no one can write in it.
    p.classList.add('button'); //This adds a CSS class called "button" to an element p.....Basically, it styles p (a paragraph or a button) to look a certain way.
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`; //This puts a new heading (h2) inside p that says "Start new Game"........Think of it as replacing p’s content with a new title.
    startover.appendChild(p); //This adds p inside another element called startover.......Imagine startover as a box, and we are placing p inside that box.
    playGame = false;  //This sets a variable playGame to false, meaning the game has ended......It’s like flipping a switch to say, “Stop the game!”
    newGame(); //This calls another function named newGame()........It’s like saying, “Alright, now run the newGame function to restart things.”
  }

/* It clears the user’s input.

Disables typing.

Creates a message to start a new game.

Adds that message to the page.

Marks the game as over.

Starts a new game. */

  function newGame() {
    const newGameButton = document.querySelector('#newGame'); //Finds the "Start new Game" button (an element with the id="newGame")......Think of this as finding a specific button on the webpage.
    newGameButton.addEventListener('click', function (e){
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = []; //Clears the list of previous guesses.....Like erasing old answers from memory.
      numGuess = 1;  //Resets the guess counter back to 1.....Like restarting a new attempt.
      guessSlot.innerHTML = ''; //Clears the part of the webpage that shows previous guesses.....Like wiping a scoreboard clean.
      remaining.innerHTML = `${11 - numGuess} `; //Updates how many guesses are left......Example: If numGuess = 1, then remaining = 10 (because 11 - 1 = 10).........Like resetting the countdown of attempts.
      userInput.removeAttribute('disabled'); //Allows the player to type in the input box again....Like unlocking a frozen textbox so you can enter numbers.
  startover.removeChild(p); //Removes the "Start new Game" message from the screen.....Like clearing the "Start New Game" message after clicking it.
  playGame = true; // Sets playGame to true, meaning the game is active again.....Like turning the game switch back ON.
    });
  }


/* 
Finds the "Start new Game" button.

Waits for a click.

When clicked:

Picks a new secret number.

Resets all previous game data.

Clears the old guesses.

Unlocks the input field.

Removes the "Start new Game" message.

Starts the game again.*/