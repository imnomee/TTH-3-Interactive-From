const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const telephoneInput = document.getElementById('telephone');
const emailInput = document.getElementById('email');

/**
 *
 * VALIDATORS
 *
 * Regex in JS = /expression/ i.e /^word$/
 * const regexObject = /^word$/ === mostly used
 * const regexObject = new RegExp('^word$');
 *
 * groups are picked and saved with $ sign and are not 0 based. so these start from 1
 * str.replace(/(\w)(\w)(\w)/, '$3 $1 $2');
 *
 */

// Can only contain letters a-z in lowercase
function isValidUsername(username) {
    //regex : start with lowercase set, add 1 or more and end with that
    return /^[a-z]+$/.test(username);
}

// Must contain a lowercase, uppercase letter and a number
function isValidPassword(password) {
    // '^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$'; minimum 8 charaacter, upper lower and one number
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}

// The telephone number must be in the format of (555) 555-5555
function isValidTelephone(telephone) {
    // return /^\(\d{3}\)\s\d{3}-\d{4}$/.test(telephone);
    return /^\D*\d{3}\D*\d{3}\D*\d{4}\D*$/.test(telephone);
}

// Must be a valid email address
function isValidEmail(email) {
    // return /^[\w]+\@[\w]+\.[\w]{1,4}$/gi.test(email);
    //regex: anything but @ 1 or more then @ and anything but @ or . then

    return /^[^@]+\@[^@.]+\.[a-z]+$/i.test(email);
}

/**
 *
 * FORMATTING FUNCTIONS
 *
 */

function formatTelephone(text) {
    let texta = '5555555555';
    const regex = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;
    return texta.replace(regex, '($1) $2-$3');
}
/**
 *
 * SET UP EVENTS
 *
 */

function showOrHideTip(show, element) {
    // show element when show is true, hide when false
    if (show) {
        element.style.display = 'inherit';
    } else {
        element.style.display = 'none';
    }
}

function createListener(validator) {
    return (e) => {
        const text = e.target.value;
        const valid = validator(text);
        const showTip = text !== '' && !valid;
        const tooltip = e.target.nextElementSibling;
        showOrHideTip(showTip, tooltip);
    };
}

usernameInput.addEventListener('input', createListener(isValidUsername));

passwordInput.addEventListener('input', createListener(isValidPassword));

telephoneInput.addEventListener('input', createListener(isValidTelephone));

telephoneInput.addEventListener('blur', (e) => {
    e.target.value = formatTelephone(e.target.value);
});

emailInput.addEventListener('input', createListener(isValidEmail));
