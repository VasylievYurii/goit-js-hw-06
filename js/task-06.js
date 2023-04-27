const inputRef = document.querySelector('#validation-input');

function onInputChange(event) {
    if (event.currentTarget.value.length === Number(inputRef.attributes['data-length'].value)){
        inputRef.classList.add('valid'); 
        inputRef.classList.remove('invalid'); 
        console.log("inputRef:", inputRef)

    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
    
}

inputRef.addEventListener("blur", onInputChange);