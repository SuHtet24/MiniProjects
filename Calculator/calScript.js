function validateNumber(input) {
    input.value = input.value.replace(/[^0-9.]/g, '');
}

document.getElementById('equals').addEventListener('click', function() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const num3 = document.getElementById('num3').value;
    const operator1 = document.getElementById('operator1').value;
    const operator2 = document.getElementById('operator2').value;
    const resultDiv = document.getElementById('result');

    if (num1 === '' || num2 === '' || num3 === '' || operator1 === '' || operator2 === '') {
        resultDiv.textContent = 'error';
        return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    const number3 = parseFloat(num3);

    if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
        resultDiv.textContent = 'error';
        return;
    }

    let secResult;
    let finalResult;

    switch (operator1) {
        case '+':
         secResult = number1 + number2;
            break;
        case '-':
         secResult = number1 - number2;
            break;
        case '×':
         secResult = number1 * number2;
            break;
        case '÷':
            if (number2 === 0) {
                resultDiv.textContent = 'error';
                return;
            }
         secResult = number1 / number2;
            break;
        default:
            resultDiv.textContent = 'error';
            return;
    }

    switch (operator2) {
        case '+':
            finalResult = secResult + number3;
            break;
        case '-':
            finalResult = secResult - number3;
            break;
        case '×':
            finalResult = secResult * number3;
            break;
        case '÷':
            if (number3 === 0) {
                resultDiv.textContent = 'error';
                return;
            }
            finalResult = secResult / number3;
            break;
        default:
            resultDiv.textContent = 'error';
            return;
    }

    resultDiv.textContent = finalResult;
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('num3').value = '';
    document.getElementById('operator1').value = '';
    document.getElementById('operator2').value = '';
    document.getElementById('result').textContent = '';
});



