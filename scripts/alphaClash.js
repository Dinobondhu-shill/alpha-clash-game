function handlePressedKeyEvent(event) {
  // get the key which is pressed by the player
  const playerPressedKey = event.key;
  console.log(playerPressedKey);
  // get the key which need to press the player
  const expectedKeyId = document.getElementById('display-word');
  const expectedKey = expectedKeyId.innerText;
  const exactKey = expectedKey.toLowerCase();
  // match the key between player pressed and expected key

  if (playerPressedKey === exactKey) {
    // update score after right click
const currentScore = getTextElementById('player_score');
    // increase the score
    const newScore = currentScore + 1;
    // updated the score
    setTextById('player_score', newScore);
    // start game again after pressing right key
    startGame();
    //  remove the exciting key's background color;
    removeBgById(exactKey)

  } else {
    // if player hit in the wrong key 
    const lifeLine = getTextElementById('player-life');
    // decrease the lifeline after hitting wrong key
    const updatedLife = lifeLine - 1;
    setTextById('player-life', updatedLife);
  }
}
document.addEventListener('keyup', handlePressedKeyEvent);

function startGame() {
  const alphabets = getAlphabet();
  // display the randomly generated alphabates to the screen
  const screenWord = document.getElementById('display-word');
  screenWord.innerText = alphabets;

  // set bgcolor to the screen word
  setBgColorById(alphabets);
}

function play() {
  hideElement('home_screen');
  showElement('playground');
  startGame();
}