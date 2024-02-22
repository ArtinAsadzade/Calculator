let $ = document;

const mainSec = $.getElementById('main-sec');
const calculatorForm = $.getElementById('calculator-form');
const error = $.getElementById('error');
const backBtn = $.getElementById('back-button');
let isCalculating = false;

const heightCalculator = $.getElementById('height-cal');
const weightCalculator = $.getElementById('weight-cal');
const loveCalculator = $.getElementById('love-cal');
const ageCalculator = $.getElementById('age-cal');
const numberCalculator = $.getElementById('number-cal');

heightCalculator.addEventListener('click', ()=>{
    if (!isCalculating) {
        isCalculating = true;
        mainSec.style.display = 'none';
        calculatorForm.style.display = 'block';
        backBtn.style.display = 'block';
    }
});
weightCalculator.addEventListener('click', ()=>{
    if (!isCalculating) {
        isCalculating = true;
        mainSec.style.display = 'none';
        calculatorForm.style.display = 'block';
        backBtn.style.display = 'block';
    }
});
loveCalculator.addEventListener('click', ()=>{
    if (!isCalculating) {
        isCalculating = true;
        mainSec.style.display = 'none';
        calculatorForm.style.display = 'block';
        backBtn.style.display = 'block';
    }
});
ageCalculator.addEventListener('click', ()=>{
    if (!isCalculating) {
        isCalculating = true;
        mainSec.style.display = 'none';
        calculatorForm.style.display = 'block';
        backBtn.style.display = 'block';
    }
});
numberCalculator.addEventListener('click', ()=>{
    if (!isCalculating) {
        isCalculating = true;
        mainSec.style.display = 'none';
        calculatorForm.style.display = 'block';
        backBtn.style.display = 'block';
    }
});
backBtn.addEventListener('click', ()=>{
    if (isCalculating) {
        isCalculating = false;
        mainSec.style.display = 'block';
        calculatorForm.style.display = 'none';
        backBtn.style.display = 'none';
    }
})

