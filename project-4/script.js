const log = console.log; // alias for console.log

// select the elements
const submitButtonElement = document.querySelector("#submit-button");
const inputElement = document.querySelector("#guess-input");
const previousGuessesElement = document.querySelector("#previous-guess");
const guessesRemainingElement = document.querySelector("#guess-remaining");
const resultsElement = document.querySelector("#results");
const newGameElement = document.querySelector("#new-game");

// generate random number
let randomNumber = Math.floor(Math.random() * 100) + 1;

// previous guesses list
let previousGuesses = [];

// remaining guesses count
let guessesRemaining = 10;

// to only allow input if key press is number
function isNumberKey(e) {
    // to get the key press [e.which is for new browsers & e.keycode is for older browsers]

    const charCode = e.which ? e.which : e.keyCode;
    // check value length for 2 instead of 3, because checks first & then the input value gets updated
    if (inputElement.value.length <= 2) {
        if (charCode >= 48 && charCode <= 57) return true;
    }
    return false;
}


// tasks to perform after incorrect guess
function afterGuess(inputValue) {
    guessesRemaining--;
    guessesRemainingElement.textContent = guessesRemaining;
    previousGuesses.push(inputValue);
    previousGuessesElement.textContent = previousGuesses;
    inputElement.value = '';
}


submitButtonElement.addEventListener("click", function (e) {
    event.preventDefault();
    // make sure there are remaining guesses
    if (guessesRemaining) {
        // get input value from input element
        const inputValue = inputElement.value;
        
        // make sure input value is valid
        if (inputValue && (inputValue >= 1 && inputValue <= 100) && !isNaN(inputValue)) {

            // check if input value is higher than the random number
            if(Number(inputValue) > randomNumber) {
                resultsElement.textContent = 'Guess Incorrect! Try to guess a lower number';
                afterGuess(inputValue); // perform tasks after incorrect guess
            } 
            // if input value is lower than the random number 
            else if(Number(inputValue) < randomNumber) {
                resultsElement.textContent = 'Guess Incorrect! Try to guess a higher number';
                afterGuess(inputValue); // perform tasks after incorrect guess
            }
            // input value is equal to random number [user guess is correct] 
            else {
                resultsElement.innerHTML = `Booyah! The guess is correct <span style="display : block"> You guessed ${randomNumber} in ${10 - guessesRemaining + 1} guesses </span>`;
                endGame();
            }
            
        } else {
            resultsElement.textContent = "Enter a valid value between 1 & 100 (inclusive)";
            inputElement.value = '';
        }
    } else {
        resultsElement.textContent = `No attempts left. Correct Number was ${randomNumber}`;
        endGame(); // end the game
    }
});

// to end the game
function endGame() {
    newGameElement.textContent = 'Start a new game';
    newGameElement.addEventListener('click', newGame);
}

// to start a new game
function newGame() {
    
    // re-assign values
    randomNumber = Math.floor(Math.random() * 100) + 1; 
    previousGuesses = [];
    guessesRemaining = 10;
    
    // clear display
    newGameElement.textContent = '';
    inputElement.value = '';
    previousGuessesElement.textContent = '';
    guessesRemainingElement.textContent = 10;
    resultsElement.textContent = '';
}



