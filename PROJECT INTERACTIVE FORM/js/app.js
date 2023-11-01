const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const mailInput = document.querySelector('#mail');

const paymentMethod = document.querySelector('#payment');
const creditCard = document.querySelector('#credit-card');
const paypal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');

//PAYMENT OPTIONS:
//hide first payment option:
paymentMethod.selectedIndex = 1;
paymentMethod.options[0].style.display = 'none';
paypal.style.display = 'none';
bitcoin.style.display = 'none';

//Indexes: 0 = select, 1 = cc, 2= paypal 3=bitcoin
// paymentMethod.selectedIndex = 1; // default

paymentMethod.addEventListener('change', (e) => {
    const option = e.target.selectedIndex;
    if (option === 1) {
        creditCard.style.display = 'block';
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
    } else if (option === 2) {
        creditCard.style.display = 'none';
        paypal.style.display = 'block';
        bitcoin.style.display = 'none';
    } else if (option === 3) {
        creditCard.style.display = 'none';
        paypal.style.display = 'none';
        bitcoin.style.display = 'block';
    } else {
        console.log('unknown payment option');
    }
});

//ACTIVITIES:
const activities = document.querySelector('.activities');
const actInputs = activities.querySelectorAll('input');
const actChecks = document.querySelectorAll('input[type="checkbox"]');

const costSpan = document.createElement('span');
costSpan.textContent = '$0.00';
// costSpan.style.color = '#ff0030';
activities.firstElementChild.appendChild(costSpan);

let cost = 0;

activities.addEventListener('change', (e) => {
    const timeNew = document.querySelectorAll(
        `input[data-day-and-time='${e.target.dataset.dayAndTime}']`
    );
    const span = document.querySelector('.activities > legend > span');
    const _cost = parseInt(e.target.dataset.cost);

    if (e.target.type === 'checkbox') {
        if (e.target.checked) {
            cost += _cost;
        } else {
            cost -= _cost;
        }
        span.textContent = `$${cost}`;
        if (cost === 0) {
            costSpan.style.color = '#ff0030';
        } else {
            costSpan.style.color = '';
        }
        // console.log(`${type}: ${name}: ${time}: ${cost}`);
        for (const check of timeNew) {
            if (e.target !== check && e.target.checked) {
                check.parentNode.style.color = 'gray';
                check.disabled = true;
                check.parentNode.style.textDecoration = 'underline';
            } else {
                check.parentNode.style.color = '';
                check.disabled = false;
                check.parentNode.style.textDecoration = '';
            }
        }
    }
});

///////////SHIRTS
const shirt = document.querySelector('.shirt');
const design = document.querySelector('#design');
const color = document.querySelector('#color');

//hide on start
color.style.display = 'none';

// first it sets all the colors display to none
// this function takes the text we want to search in an array
// when found, it sets the display back to normal of that color
// and by default set the selected index to the one we provide
// according to the first color of the category required

function colorSelector(_text, _index) {
    for (const col of color) {
        col.style.display = 'none';
        const colText = col.textContent.trim().toLowerCase();
        if (colText.includes(_text)) {
            col.style.display = '';
            color.style.display = '';
            color.selectedIndex = _index;
        }
    }
}

design.addEventListener('change', (e) => {
    // DESIGNS: '♥ js' & 'js puns' to search for in function
    if (e.target.id === 'design') {
        if (design.selectedIndex === 1) {
            colorSelector('js puns', 0);
        } else {
            colorSelector('♥ js', 3);
        }
    }
});

//// BASIC INFORMATION

//1st fieldset inside the form is selected
const info = document.querySelector('form > fieldset');
const title = info.querySelector('#title');

const input = document.createElement('input');
input.style.display = 'block';
input.type = 'text';
input.placeholder = 'Please enter Job role';
input.style.display = 'none';
info.appendChild(input);

title.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        input.style.display = '';
    } else {
        input.style.display = 'none';
    }
});

////NAME VALIDATION

//ONLY 5 WORDS
// NO SPECIAL CHARACTERS DOTS OR DASHES

// name validation:  /^[a-z]+([a-z ]?[a-z]*){1,4}$/gim
// email validation: /^[^@]+\@[^@.]+\.[a-z]+$/gim

function fieldValidation(_regex, _text) {
    return _regex.test(_text);
}
const nameRegex = /^[a-z]+([a-z ]?[a-z]*){1,4}$/gim;
const emailRegex = /^[^@]+\@[^@.]+\.[a-z.]+$/gim;
const zipRegex = /^\d{5}$/gm;
const cvvRegex = /^\d{3}$/gm;
const ccnumRegex = /^((\d{4})[\s.-]?){4}\d?$/gm;
// console.log(username.previousElementSibling);

function fieldColor(_el, _regex) {
    const fieldText = _el.value.trim().toLowerCase();
    // console.log(_el);
    if (fieldValidation(_regex, fieldText)) {
        _el.style.borderColor = '';
    } else {
        _el.style.borderColor = '#ff0030';
    }
}
const username = document.querySelector('#name');
const email = document.querySelector('#mail');
const zip = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');
const ccnum = document.querySelector('#cc-num');

form.addEventListener('submit', (e) => {
    fieldColor(username, nameRegex);
    fieldColor(email, emailRegex);
    fieldColor(zip, zipRegex);
    fieldColor(cvv, cvvRegex);
    fieldColor(ccnum, ccnumRegex);
    e.preventDefault();
    // zip.value = '';
    // username.value = '';
    // email.value = '';
    // cvv.value = '';
});
