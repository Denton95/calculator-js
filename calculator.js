let number1 = '';
let operator = '';
let number2 = '';
let answer = 0;
let decimalClicked = 0;

const numButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const displayAnswer = document.querySelector("#answer");
const displayCalculation = document.querySelector("#calculation");
const decimal = document.querySelector("#decimalButton");


numButtons.forEach(numButton => {
    numButton.addEventListener("click", () => {
    buildNumber(numButton.textContent);
}
)});

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", () => {
    setOperator(operatorButton.textContent);
}
)});

equals.addEventListener("click" , () =>  {
    operate();
    number1 = '';
}
)
clear.addEventListener("click" , () =>  {
        clearValues();
}
)

decimal.addEventListener("click" , () =>  {
    if (decimalClicked === 0){
        buildNumber(decimal.textContent);
        decimalClicked = 1;
    }
}
)

function operateAdd(num1, num2){
    return Number(num1) + Number(num2);
};

function operateSubtract(num1, num2){
    return Number(num1) - Number(num2);
};

function operateDivide(num1, num2){
    if (Number(num1) === 0 || Number(num2) === 0 ){
        return "NaN";
    }
    else {
        return Number(num1) / Number(num2);
    }
    ;
};

function operateMultiply(num1, num2){
    return Number(num1) * Number(num2);
};

function buildNumber(string){
    if(!operator){
        number1 = number1 + string;
        displayAnswer.textContent = number1
        displayCalculation.textContent = `${number1} ${operator} ${number2}`;
    } else {
    number2 = number2 + string;
    displayAnswer.textContent = number2;
    displayCalculation.textContent = `${number1} ${operator} ${number2}`;
    };
};

function setOperator(string){
    if(!operator){
        operator = string;
        displayCalculation.textContent = `${number1} ${operator} ${number2}`
    }
    else{
        displayCalculation.textContent = `${number1} ${operator} ${number2}`
        operate();
        operator = string;
    }
    decimalClicked = 0;
};

function clearValues(){
    number1 = '';
    number2 = '';
    answer = 0;
    decimalClicked = 0;
    operator = '';
    displayCalculation.textContent = ``
    displayAnswer.textContent = answer;
}

function operate(){
    if (operator === "+"){
       number1 = operateAdd(number1, number2);
    }
    else if(operator === "-"){
        number1 = operateSubtract(number1, number2);
    }
    else if(operator === "/"){
       number1 = operateDivide(number1, number2);
    }
    else if(operator === "*"){
        number1 = operateMultiply(number1, number2);
    }
    operator = '';
    number2 = '';
    answer = number1;
    displayAnswer.textContent = answer;
};
