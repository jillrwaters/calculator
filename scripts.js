// constants
const BUTTONS = [...document.querySelectorAll("button")]
const NUMBERS_DIV = document.querySelector(".numbers")
const DISPLAY = document.querySelector(".display")
const OPERATORS = [...document.querySelectorAll(".operators")]

let displayValue = DISPLAY.textContent
let operandA
let operandB
let currentOperator

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

const operate = (func, a, b) => {
    return func(a, b)
}

// populate display with number clicks


const showNumber = (num) => {
    (DISPLAY.textContent === "0") ? DISPLAY.textContent = `${num}` : DISPLAY.textContent += `${num}`;
    // need function to stop displaying numbers after 11 digits
}

const clearEverything = () => {
    displayValue = "0"
    DISPLAY.textContent = "0" 
}

const storeOperand = () => {
    displayValue = DISPLAY.textContent
    !operandA ? operandA = displayValue : operandB = displayValue;
    // need to save current operator for operate() function
}
