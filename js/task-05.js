const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {

    if (outputRef.textContent === ' '){
            outputRef.textContent = 'Anonymous';

    } else {
        outputRef.textContent = event.currentTarget.value;
    };
}

