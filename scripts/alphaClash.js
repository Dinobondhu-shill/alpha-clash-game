
function handlePressedKeyEvent(event){
  // get the key which is pressed by the player
  const playerPressedKey = event.key;
  console.log(playerPressedKey);
  // get the key which need to press the player
  const expectedKeyId = document.getElementById('display-word');
  const expectedKey = expectedKeyId.innerText;
  const exactKey = expectedKey.toLowerCase();
// match the key between player pressed and expected key

if(playerPressedKey === exactKey){
 startGame();
}
else{
  console.log('you lost a lifeline');
}
}
document.addEventListener('keyup', handlePressedKeyEvent);

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