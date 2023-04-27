const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
inputRef.addEventListener('change', () => textRef.style.fontSize = inputRef.value + 'px');
  