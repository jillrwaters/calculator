// constants
const NUMBERS_DIV = document.querySelector(".numbers")
const DISPLAY = document.querySelector(".display")

const BUTTONS = [...document.querySelectorAll("button")]
const ADD_BTN = document.querySelector("#add")
const SUBTRACT_BTN = document.querySelector("#subtract")
const MULTIPLY_BTN = document.querySelector("#multiply")
const DIVIDE_BTN = document.querySelector("#divide")
const EQUALS_BTN = document.querySelector("#equals")


let currentOperator

let displayValue = DISPLAY.textContent

let operandA
let operandB


// basic math functions

const add = (a, b) => {
    return a + b
}

const subtract = (a, b) => {
    return a - b
}

const multiply = (a, b) => {
    return a * b
}

const divide = (a, b) => {
    return a / b
}


// populate display with number clicks

const showNumber = (num) => {
    if (DISPLAY.textContent.length < 11) {
        DISPLAY.textContent === "0" ? DISPLAY.textContent = `${num}` : DISPLAY.textContent += `${num}`;
    }
}

const clearEverything = () => {
    displayValue = ""
    DISPLAY.textContent = "0"
    currentOperator = ""
    operandA = ""
    operandB = ""

    console.log(`CLEARED => operandA: ${operandA} | operandB: ${operandB} | currentOperator: ${currentOperator}`)
}

const storeOperand = (btn) => {
    displayValue = DISPLAY.textContent
    currentOperator = btn

    !operandA ? operandA = parseFloat(displayValue) : operandB = parseFloat(displayValue);


    DISPLAY.textContent = "0"
}

let isInt =(n) => {
    return n % 1 === 0;
 }

let roundTwoDecimals = (num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100
   
}
    


const operate = (op) => {
    if (!operandB) {
        operandB = parseFloat(DISPLAY.textContent)
    }

    switch (op) {
        case "+":
            DISPLAY.textContent = `${roundTwoDecimals(add(operandA, operandB))}`;
            break;
        case "-":
            DISPLAY.textContent = `${roundTwoDecimals(subtract(operandA, operandB))}`;
            break;
        case "*":
            DISPLAY.textContent = `${roundTwoDecimals(multiply(operandA, operandB))}`;
            break;
        case "/":
            DISPLAY.textContent = `${roundTwoDecimals(divide(operandA, operandB))}`;
            break;
    }


    // display entire expression? DISPLAY.textContent = `${operandA} ${op} ${operandB} = ${answer}`
}



