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
// set background color to the highlighted alphabate
function setBgColorById (element){
  const elementId = document.getElementById(element);
  elementId.classList.add('bg-orange-400');
}