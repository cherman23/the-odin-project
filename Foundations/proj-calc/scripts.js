const numButtons = document.getElementsByClassName("numButton");
var equationDisplay = document.getElementById("equation")
var currentOperator = null;
var operand_A = null;
var operand_B = null;

function operate(){
    if (currentOperator == "+"){
        return Number(operand_A) + Number(operand_B)
    }
    else if (currentOperator == "-"){
        return Number(operand_A) - Number(operand_B)
    }
    else if (currentOperator == "/"){
        return Number(operand_A) / Number(operand_B)
    }
    else if (currentOperator == "*"){
        return Number(operand_A) * Number(operand_B)
    }
}

function clickButton(){
    for (let i = 0; i < numButtons.length; i++){
        numButtons[i].addEventListener("click", () => {
            if (numButtons[i].classList.contains("operand")){
                updateOperand(numButtons[i].value);
            }
            else if (numButtons[i].classList.contains("operator")){
                updateOperator(numButtons[i].value);
            }
            else if (numButtons[i].id == "equalButton"){
                evaluateFunction();
            }
        });
    }
}

clickButton();

function evaluateFunction(){
    if (!(operand_B === null)) {
        operand_A = operate().toString();
        operand_B = null
        updateOperator(null);
        updateDisplay(operand_A);
    }
    else {
        updateDisplay(operand_A)
    }
}

function updateOperand(operand){
    if (operand_A === null){
        operand_A = operand;
    }
    else {
        if (currentOperator === null) {
            operand_A = operand_A.concat(operand);
        }
        else {
            operand_B = operand;
            evaluateFunction();
        }
    }
    updateDisplay(operand_A);
}

function updateOperator(operator) {
    currentOperator = operator;
}

function updateDisplay(value){
    equationDisplay.textContent = value;
}


