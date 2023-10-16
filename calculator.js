let number1 = 0;
let operator = '';
let number2 = 0;

const numButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

numButtons.forEach(numButton => {
    numButton.addEventListener("click", () => {
    buildNumber(numButton.textContent);
}
)});

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", () => {
    setOperator(operatorButton.textContent);
    console.log(operator);
}
)});

equals.addEventListener("click" , () =>  {
    operate();
}
)
clear.addEventListener("click" , () =>  {
    clearValues();
}
)

function operateAdd(num1, num2){
    return Number(num1) + Number(num2)
};

function operateSubtract(num1, num2){
    return Number(num1) - Number(num2)
};

function operateDivide(num1, num2){
    if (num1 === 0 || num2 === 0 ){
        return "NaN"
    };
    return Number(num1) / Number(num2)
};

function operateMultiply(num1, num2){
    return Number(num1) * Number(num2)
};

function buildNumber(string){
    if(!operator){
        number1 = number1 + string;
    } else {
    number2 = number2 + string
    };
};

function setOperator(string){
    if(!operator){
        operator = string;
    } else {
        operate();
        operator = string;
    }
};

function clearValues(){
    number1 = 0;
    number2 = 0;
    operator = '';
}

function operate(){
    if (operator === "+"){
       number1 = operateAdd(number1, number2);
       number2 = 0;
    }
    else if(operator === "-"){
        number1 = operateSubtract(number1, number2);
        number2 = 0;
    }
    else if(operator === "/"){
       number1 = operateDivide(number1, number2);
       number2 = 0;
    }
    else if(operator === "*"){
        number1 = operateMultiply(number1, number2);
        number2 = 0;
    }
};
