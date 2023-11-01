const form = document.querySelector('#form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

// Usernames can only contain letters a-z in lowercase
const isValidUsername = () => /^[a-z]+$/.test(usernameInput.value);

// Password must contain a lowercase, uppercase letter and a number
const isValidPassword = () =>
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(passwordInput.value);

// Email must contain an @ symbol and a domain name
const isValidEmail = () => /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput.value);

// Add an event listener to the form listening for the submit event
form.addEventListener('submit', (e) => {
    e.preventDefault();

    validator(isValidUsername, usernameInput);
    validator(isValidEmail, emailInput);
    validator(isValidPassword, passwordInput);
});

// validate the email by calling the isValidEmail function
// apply the error or valid class based on the returned value

// validate the password by calling the isValidPassword function
// apply the error or valid class based on the returned value

function validator(_func, _el) {
    const label = _el.parentNode;
    const span = _el.nextElementSibling;
    if (_func()) {
        label.className = 'valid';
        span.style.display = 'none';
    } else {
        label.className = 'error';
        span.style.display = 'block';
    }
}
