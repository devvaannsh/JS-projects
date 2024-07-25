const log = console.log;

const calculateButton = document.querySelector('#calculate');
const result = document.querySelector('#result');

log(calculateButton);
log(result);

calculateButton.addEventListener('click', function (e) {
    
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    
    if(!height || height < 0) {
        result.textContent = 'Insert height value';
        return;
    }
    if(!weight || weight < 0) {
        result.textContent = 'Insert weight value';
        return;
    }
    
    const bmiValue = ((weight/(height * height)) * 10000).toFixed(1);
    let output = '';
    if(bmiValue < 18.6) {
        output = `underweight : ${bmiValue}`;
    } else if (bmiValue >= 18.6 && bmiValue <= 24.9) {
        output = `normal range : ${bmiValue}`;
    } else {
        output = `overweight : ${bmiValue}`;
    }
    result.textContent = output;
});


