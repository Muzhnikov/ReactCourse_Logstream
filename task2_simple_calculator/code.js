let display = document.getElementById('display')
let history = document.getElementById('history')
let countOperators = 0;

function addSymbol(symbol){
    if(['+', '-', '×', '/'].includes(symbol)){
        if(symbol === '-' && (display.value === '' || ['+', '×', '/', '-'].includes(display.value.slice(-1)))){ // проверка минуса, как отрицательное число
            display.value += symbol;
        } 
        else if(countOperators === 0){
            display.value += symbol;
            countOperators++;
        }
        else{
            calculate();
            display.value += symbol;
            countOperators++; 
        }
    }
    else{
        display.value += symbol;
    }
}

function clearDisplay(){
    display.value = '';
    countOperators = 0;
}

function add(x, y){
    return x + y;
}

function substract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    if(y === 0){
        alert('На ноль делить нельзя');
        clearDisplay();
        return null;
    }
    return x / y;
}

function updateHistory(input){
    let historyPart = document.createElement('p');
    historyPart.innerHTML = input;
    historyPart.className = 'history-part';
    history.appendChild(historyPart);
}

function calculate(){
    let expression = display.value;
    let match = expression.match(/(-?\d*\.?\d+)([+\-×/])(-?\d*\.?\d+)/);
    console.log(match);
    if(match){
        let leftOperand = parseFloat(match[1]);
        let operation = match[2];
        let rightOperand = parseFloat(match[3]);
        let result;
        
        switch(operation){
            case '+':
                result = add(leftOperand, rightOperand);
                break;
            case '-':
                result = substract(leftOperand, rightOperand);
                break;
            case '×':
                result = multiply(leftOperand, rightOperand);
                break;
            case '/':
                result = divide(leftOperand, rightOperand);
                if(result === null) return;
                break;
        }
        display.value = result;
        countOperators = 0;
        result = expression + ' = ' + result;
        updateHistory(result);
    }
    else{
        alert('Ошибка! Неверное выражение');
        clearDisplay();
    }
}