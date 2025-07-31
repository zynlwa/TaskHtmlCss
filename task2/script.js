
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const resultInput = document.getElementById('result');

const toplaBtn = document.querySelector('.topla');
const cixmaBtn = document.querySelector('.cixma');
const vurmaBtn = document.querySelector('.vurma');
const bolmeBtn = document.querySelector('.bolme');

function calculate(operation) {
    const num1 = parseFloat(number1Input.value);
    const num2 = parseFloat(number2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultInput.value = 'Zəhmət olmasa ədəd daxil edin';
        return;
    }

    let result;

    switch (operation) {
        case 'topla':
            result = num1 + num2;
            break;
        case 'cix':
            result = num1 - num2;
            break;
        case 'vur':
            result = num1 * num2;
            break;
        case 'bol':
            if (num2 === 0) {
                resultInput.value = '0-a bölmək olmaz';
                return;
            }
            result = num1 / num2;
            break;
    }

    resultInput.value = result;
}

toplaBtn.addEventListener('click', () => calculate('topla'));
cixmaBtn.addEventListener('click', () => calculate('cix'));
vurmaBtn.addEventListener('click', () => calculate('vur'));
bolmeBtn.addEventListener('click', () => calculate('bol'));
