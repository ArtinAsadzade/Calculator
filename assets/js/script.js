let $ = document;
const mainSec = $.getElementById('main-sec');
const calculatorForm = $.getElementById('calculator-form');
const resultDivElem = $.getElementById('resultDivElem');
const error = $.getElementById('error');
const clearDataBtn = $.getElementById('clear-button');
const backBtn = $.getElementById('back-button');
const submitBtn = $.getElementById('submit');
let isInMainSec = true;

const bmiCalculator = $.getElementById('bmi-cal');
const loveCalculator = $.getElementById('love-cal');
const numberCalculator = $.getElementById('number-cal');

const loveCountElem = $.getElementById('loveCount');
const firstUserNameElem = $.getElementById('firstUserNameElem');
const loveNameElem = $.getElementById('loveNameElem');
const countElem = $.getElementById('countElem');

const bmiResultElem = $.getElementById('bmiResultElem');
const idealWeight = $.getElementById('idealWeight');
const ShowBmiResultElem = $.getElementById('bmi');
const bmiResult = $.getElementById('result');

const firstNameValue = $.getElementById('firstName');
const lastNameValue = $.getElementById('lastName');
const heightValue = $.getElementById('height');
const weightValue = $.getElementById('weight');
const loveNameValue = $.getElementById('loveName');
const birthDayValue = $.getElementById('birthDay');
const genderSelector = $.getElementById('genderSelctor');

const userData = [];
let newUser;
let userAge

if (!localStorage.length) {
    calculatorForm.style.display = 'block';
    mainSec.style.display = 'none';
} else if (localStorage.length) {
    calculatorForm.style.display = 'none';
    mainSec.style.display = 'block';
}

clearDataBtn.addEventListener('click', ()=>{
    localStorage.clear();
    firstNameValue.value = '';
    lastNameValue.value = '';
    heightValue.value = '';
    weightValue.value = '';
    loveNameValue.value = '';
    birthDayValue.value = '';
    window.location.reload();
});

submitBtn.addEventListener('click', ()=> {
    if (firstNameValue.value.length < 1 || lastNameValue.value.length < 1 || heightValue.value.length < 1 || weightValue.value.length < 1 || loveNameValue.value.length < 1 || birthDayValue.value.length < 1) {
        error.style.display = 'block';
        error.style.color = 'red';
        error.innerHTML = 'Please complete the form !';
        setInterval(() => {
            error.style.display = 'none';
            error.innerHTML = '';
        }, 8000);
    } else if (birthDayValue.value.length != 4) {
        error.style.display = 'block';
        error.style.color = 'red';
        error.innerHTML = 'Please enter your date of birth correctly !';
        setInterval(() => {
            error.style.display = 'none';
            error.innerHTML = '';
        }, 8000);
    } else {
        if (birthDayValue.value < 1403) {
            userAge = 1403 - birthDayValue.value;
        } else if (birthDayValue.value > 1403) {
            userAge = 2024 - birthDayValue.value;
        }
        newUser = {
            id: 1,
            firstName: firstNameValue.value,
            lastName: lastNameValue.value,
            height: heightValue.value,
            weight: weightValue.value,
            loveName: loveNameValue.value,
            age: birthDayValue.value,
            gender: genderSelector.value
        }
        userData.push(newUser);
        userData.forEach((data)=>{
            localStorage.setItem('id', data.id);
            localStorage.setItem('firstName', data.firstName);
            localStorage.setItem('lastName', data.lastName);
            localStorage.setItem('height', data.height);
            localStorage.setItem('weight', data.weight);
            localStorage.setItem('loveName', data.loveName);
            localStorage.setItem('age', userAge);
            localStorage.setItem('gender', data.gender);
        })
        window.location.reload();
    }
});

bmiCalculator.addEventListener('click', ()=>{
    backBtn.style.display = 'block';
    clearDataBtn.style.display = 'none';

    resultDivElem.style.display = 'block';
    bmiResultElem.style.display = 'block';
    loveCountElem.style.display = 'none';
    mainSec.style.display = 'none';

    let bmiHeight = localStorage.getItem('height') / 100;
    let bmi = localStorage.getItem('weight') / bmiHeight / bmiHeight.toFixed(1);
    let fatPercentage = Math.floor(localStorage.getItem('weight') / bmi);
    let overWeight = Math.floor(fatPercentage * localStorage.getItem('weight')) / 100;

    if (localStorage.getItem('gender') === 'Woman') {
        ShowBmiResultElem.innerHTML = bmi;
        idealWeight.innerHTML = Math.floor(localStorage.getItem('weight') - overWeight);

        if (bmi < 18.5) {
            bmiResult.innerHTML = 'Thin and underweight !';
            bmiResult.style.color = 'red';
        } else if (bmi < 25) {
            bmiResult.innerHTML = 'proper weight :)';
            bmiResult.style.color = 'white';
        } else if (bmi < 29.9) {
            bmiResult.innerHTML = 'Overweight !';
            bmiResult.style.color = 'yellow';
        } else if (bmi > 30) {
            bmiResult.innerHTML = 'excessive obesity !!!';
            bmiResult.style.color = 'red';
        }
    } else if (localStorage.getItem('gender') === 'Man') {
        ShowBmiResultElem.innerHTML = bmi.toFixed(1);
        idealWeight.innerHTML = Math.floor(localStorage.getItem('weight') - overWeight);

        if (bmi < 18.5) {
            bmiResult.innerHTML = 'Thin and underweight !';
            bmiResult.style.color = 'red';
        } else if (bmi < 25) {
            bmiResult.innerHTML = 'proper weight :)';
            bmiResult.style.color = 'white';
        } else if (bmi < 29.9) {
            bmiResult.innerHTML = 'Overweight !';
            bmiResult.style.color = 'yellow';
        } else if (bmi > 30) {
            bmiResult.innerHTML = 'excessive obesity !!!';
            bmiResult.style.color = 'red';
        }
    }
});
loveCalculator.addEventListener('click', ()=>{
    backBtn.style.display = 'block';
    clearDataBtn.style.display = 'none';

    resultDivElem.style.display = 'block';
    loveCountElem.style.display = 'block';
    bmiResultElem.style.display = 'none';
    mainSec.style.display = 'none';

    randomNumber = Math.floor(Math.random() * 100) + '%';
    firstUserNameElem.innerHTML = localStorage.getItem('firstName');
    loveNameElem.innerHTML = localStorage.getItem('loveName');
    countElem.innerHTML = randomNumber;
});

numberCalculator.addEventListener('click', ()=>{
    alert('Coming Soon <3')
});

backBtn.addEventListener('click', ()=>{
    resultDivElem.style.display = 'none';
    loveCountElem.style.display = 'none';
    bmiResultElem.style.display = 'none';
    backBtn.style.display = 'none';
    mainSec.style.display = 'block';
    clearDataBtn.style.display = 'block';
});
