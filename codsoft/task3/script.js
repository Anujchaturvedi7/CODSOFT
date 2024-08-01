document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let firstOperand = null;
    let secondOperand = null;
    let operator = null;
    let shouldResetDisplay = false;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (button.classList.contains('number')) {
                handleNumber(value);
            } else if (button.id === 'clear') {
                clearDisplay();
            } else if (button.id === 'equals') {
                calculate();
            } else if (button.classList.contains('operator')) {
                handleOperator(button.id);
            }
        });
    });

    function handleNumber(number) {
        if (shouldResetDisplay) {
            display.textContent = number;
            shouldResetDisplay = false;
        } else {
            display.textContent = display.textContent === '0' ? number : display.textContent + number;
        }
        currentInput = display.textContent;
    }

    function handleOperator(op) {
        if (operator !== null) calculate();
        firstOperand = parseFloat(display.textContent);
        operator = op;
        shouldResetDisplay = true;
    }

    function calculate() {
        if (operator === null || shouldResetDisplay) return;

        secondOperand = parseFloat(display.textContent);
        switch (operator) {
            case 'add':
                display.textContent = firstOperand + secondOperand;
                break;
            case 'subtract':
                display.textContent = firstOperand - secondOperand;
                break;
            case 'multiply':
                display.textContent = firstOperand * secondOperand;
                break;
            case 'divide':
                display.textContent = firstOperand / secondOperand;
                break;
        }

        currentInput = display.textContent;
        operator = null;
    }

    function clearDisplay() {
        display.textContent = '0';
        currentInput = '';
        firstOperand = null;
        secondOperand = null;
        operator = null;
    }
});
