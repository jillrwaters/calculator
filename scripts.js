// constants
const NUMBERS_DIV = document.querySelector(".numbers")
const DISPLAY = document.querySelector(".display")

const BUTTONS = [...document.querySelectorAll("button")]
const ADD_BTN = document.querySelector("#add")
const SUBTRACT_BTN = document.querySelector("#subtract")
const MULTIPLY_BTN = document.querySelector("#multiply")
const DIVIDE_BTN = document.querySelector("#divide")
const EQUALS_BTN = document.querySelector("#equals")

function Operator(selector, symbol, method) {
    this.selector = selector
    this.symbol = symbol
    this.method = method
}

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
    (DISPLAY.textContent === "0") ? DISPLAY.textContent = `${num}` : DISPLAY.textContent += `${num}`;


    console.log(`${num}`)
    // need function to stop displaying numbers after 11 digits
}

const clearEverything = () => {
    displayValue = "0"
    DISPLAY.textContent = "0"
    operandA = ""
    operandB = ""
}

const ADD = new Operator(ADD_BTN, "+", add)
const SUBTRACT = new Operator(SUBTRACT_BTN, "-", subtract)
const MULTIPLY = new Operator(MULTIPLY_BTN, "*", multiply)
const DIVIDE = new Operator(DIVIDE_BTN, "-", divide)

const storeOperand = (btn) => {
    displayValue = DISPLAY.textContent
    currentOperator = btn

    !operandA ? operandA = displayValue : operandB = displayValue;

    DISPLAY.textContent = "0"

}


const operate = (op, a, b) => {
    operandB = displayValue

    console.log(`operandA: ${operandA} | operandB: ${operandB} | currentOperator: ${currentOperator}`)

    

    op = currentOperator
    DISPLAY.textContent = `${a} ${op} ${b}`
}

