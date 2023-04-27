const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
 
    if (event.currentTarget.value.trim().length === 0){
        
            outputRef.textContent = 'Anonymous';

    } else {
        outputRef.textContent = event.currentTarget.value;
    };
}

console.log("inputRef", inputRef.textLength);