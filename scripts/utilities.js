function hideElement (elementById){
  const element = document.getElementById(elementById);
  element.classList.add('hidden');
}
function showElement (elementById){
  const element = document.getElementById(elementById);
  element.classList.remove('hidden');
}