function operateAdd(num1, num2){
    return num1 + num2
};

function operateSubtract(num1, num2){
    return num1 - num2
};

function operateDivide(num1, num2){
    if (num1 === 0 || num2 ===0 ){
        return "NaN"
    };
    return num1/num2
};

function operateMultiply(num1, num2){
    return num1*num2
};

let number1 = "";
let operator = "";
let number2 = "";

function operate(){
    if (operator = "+"){
        operateAdd(number1, number2);
    }
    else if(operator = "-"){
        operateSubtract(number1, number2);
    }
    else if(operator = "/"){
        operateDivide(number1, number2);
    }
    else if(operator = "*"){
        operateMultiply(number1, number2);
    }
};
