function hideElement (elementById){
  const element = document.getElementById(elementById);
  element.classList.add('hidden');
}
function showElement (elementById){
  const element = document.getElementById(elementById);
  element.classList.remove('hidden');
}
// getting random alphabets 
function getAlphabet(){
  const alphabetsString = 'abcdefghijklmnopqrstuvwxyz'
  const alphabets = alphabetsString.split('');

  
  const randomIndex = Math.random() *25;
  const index = Math.round(randomIndex);
  
  const word = alphabets[index];
  return word;
}
function getElementTextById(element){
  const displayWord = document.getElementById(element);
  const word = displayWord.innerText;
  return word
}
// set background color to the highlighted alphabate
function setBgColorById (element){
  const elementId = document.getElementById(element);
  elementId.classList.add('bg-orange-400');
}
function removeBgById(element){
  const removeBg= document.getElementById(element);
 removeBg.classList.remove('bg-orange-400')
}
function getTextElementById(element){
  const getElement = document.getElementById(element);
  const elementValue = getElement.innerText;
  const value = parseInt(elementValue);
return value;
}
function setTextById (element, value){
  const elementId = document.getElementById(element);
  elementId.innerText = value;
}