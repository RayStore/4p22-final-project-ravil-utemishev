import 

const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputConfirm = document.getElementById('password-confirm');
const emailRequired = document.getElementById('email-requred_id');
const emailError = document.getElementById('email-error');
const passwordRequired = document.getElementById('password-reqired_id');
const lengthPassword = document.getElementById('password-length');
const passwordConfirm = document.getElementById('password-confirm_id');

const button = document.querySelector('.registr-box__button');

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

button.addEventListener('click', (event) => {
    emailRequired.style.display = 'none';
    emailError.style.display = 'none';
    passwordRequired.style.display = 'none';
    lengthPassword.style.display = 'none';
    passwordConfirm.style.display = 'none';

    let emailBool = false;
    let passwordBool = false;
    let passconfirmBool = false;

    if (inputEmail.value === '' || validateEmail(inputEmail.value) === false) {
        inputEmail.style.border = "2px solid red";
        if (inputEmail.value === '') {
            emailRequired.style.display = 'flex';
        } else if (validateEmail(inputEmail.value) === false) {
            emailError.style.display = 'flex';
        }

        emailBool = false;
    } else {
        inputEmail.style.border = "2px solid #787878";
        emailRequired.style.display = 'none';
        emailError.style.display = 'none';
        emailBool = true;
    }

    if (inputPassword.value === '' || inputPassword.value.length < 8) {
        inputPassword.style.border = "2px solid red";
        if (inputPassword.value === '') {
            passwordRequired.style.display = 'flex';
        } else if (inputPassword.value.length < 8) {
            lengthPassword.style.display = 'flex';

        }

        passwordBool = false;
    } else {
        inputPassword.style.border = "2px solid #787878";
        passwordRequired.style.display = 'none';
        lengthPassword.style.display = 'none';
        passwordBool = true;
    }

    if (inputConfirm.value === '' || inputConfirm.value !== inputPassword.value) {
        inputConfirm.style.border = "2px solid red";
        if (inputConfirm.value === '') {
            passwordConfirm.style.display = 'flex';
        } else if (inputConfirm.value !== inputPassword.value) {
            passwordConfirm.style.display = 'flex';

        }

        passconfirmBool = false;
    } else {
        inputConfirm.style.border = "2px solid #787878";
        passwordConfirm.style.display = 'none';
        passconfirmBool = true;
    }

    if (emailBool && passwordBool && passconfirmBool) {
        console.log(`Email:\t${inputEmail.value}\nPassword:\t${inputPassword.value}\nPassword-Confirm:\t${inputConfirm.value}`)
    }

    event.preventDefault();

});