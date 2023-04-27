const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){

    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (mail.trim().length === 0 || password.trim().length === 0){

        alert('Всі поля повинні бути заповнені!')

    } else {

        const dataForm = {
            mail, 
            password,
        };
        console.log(dataForm);
        reset(formElements);
      
    }
      
    
}

function reset(emptySpace){
    emptySpace.email.value = '';
    emptySpace.password.value = '';
}