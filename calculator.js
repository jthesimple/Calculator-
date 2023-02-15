const add = function(a, b) {
    return a + b;
  };

const subtract = function(a, b) {
    return a - b;
  };

const multiply = function(a,b){
    return a*b;
  };

const divide = function(a,b){
    return a/b;
  };

const operate = function(operator,b,c){
    if (operator === '+'){
        return add(b,c);
    } else if (operator === '-'){
        return subtract(b,c);
    } else if (operator === '*'){
        return multiply(b,c);
    } else if (operator === '/'){
        return divide(b,c);
    }
};

const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const decimal = document.querySelector('.decimal');
let inputs = '';
let previousInputs = '';
let operand = '';

///This functions adds a evenet listener to all tags with class btn.
const numberListener = function(){
    buttons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            let selection = button.getAttribute('value');
            inputs += selection
            display.textContent = inputs;       
        });
    });   
};

///This function adds a listener to operator symbols.
const operatorListener = function(){
    operators.forEach((operator)=>{
        operator.addEventListener('click', ()=>{
            operand = operator.getAttribute('value');
            previousInputs = inputs;
            inputs = '';
            display.textContent = operand;
        });
    });
};

////This function calculates the values of inputs. 
const equalListener = function(){
    equal.addEventListener('click',()=>{
        previousInputs = parseFloat(previousInputs);
        inputs = parseFloat(inputs);
        display.textContent = operate(operand,previousInputs,inputs);
        inputs = display.textContent;
    })
};

///This function clears the display and resets the input strings. 
const clearDisplay = function(){
    clear.addEventListener('click', ()=>{
        inputs = '';
        previousInputs = '';
        display.textContent='0';
    });
};

const decimalListener = function(){
    decimal.addEventListener('click', ()=>{
        let selection = decimal.getAttribute('value');
        inputs += selection;
        display.textContent = inputs;
    }); 
};


numberListener();
operatorListener();
equalListener();
clearDisplay();
decimalListener();