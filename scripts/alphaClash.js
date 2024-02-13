

function startGame (){
 const alphabets = getAlphabet();
// display the randomly generated alphabates to the screen
const screenWord = document.getElementById('display-word');
screenWord.innerText = alphabets;

// set bgcolor to the screen word
setBgColorById(alphabets);

}

function play (){
  hideElement('home_screen');
  showElement('playground');
  startGame();
}