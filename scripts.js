// constants
const NUMBERS_DIV = document.querySelector(".numbers")
const DISPLAY = document.querySelector(".display")

const BUTTONS = [...document.querySelectorAll("button")]
const ADD_BTN = document.querySelector("#add")
const SUBTRACT_BTN = document.querySelector("#subtract")
const MULTIPLY_BTN = document.querySelector("#multiply")
const DIVIDE_BTN = document.querySelector("#divide")
const EQUALS_BTN = document.querySelector("#equals")


let operatorA
let operatorB


let dV = DISPLAY.textContent

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

const testResults = () => {
    console.log(`operandA: ${operandA} | operandB: ${operandB} | operatorA: ${operatorA} | operatorB: ${operatorB} | dV: ${dV} | `)
}


/
// -------------------- replace this function with updateDisplay()
// const showNumber = (num) => {
//     if (DISPLAY.textContent.length < 11) {
//         DISPLAY.textContent === "0" ? DISPLAY.textContent = `${num}` : DISPLAY.textContent += `${num}`;
//     }
// }
// ------------------ ^ replace this function with updateDisplay() ^


// ------------------------------------- change screen info
const updateDisplay = (info) => {
    // triggered inside another function after storing info or doing calculation
    if (DISPLAY.textContent.length < 11) {
        DISPLAY.textContent === "0" ? DISPLAY.textContent = `${info}` : DISPLAY.textContent += `${info}`;
    }
}
// ^ NEW FUNCTION ^

const clearEverything = () => {
    dV = ""
    DISPLAY.textContent = "0"
    operatorA = ""
    operandA = ""
    operandB = ""
}
// -------------------------------------- ^ change screen info ^


// -------------------------------------- store operands 

const newOpd = (btn) => {
    // triggered when any operand is pressed. stores last operand pressed
    dV = DISPLAY.textContent
    operatorA = btn
    !operandA ? operandA = parseFloat(dV) : operandB = parseFloat(dV);
}
// ^ EDITING FUNCTION  ^

const newOpt = (btn) => {
    // store number that has been input so far, trigger when any operand is pressed
} 

// ^ NEW FUNCTION ^
// -------------------------------------- ^ store operands ^

const isInt =(n) => {
    return n % 1 === 0;
 }

const roundTwoDecimals = (num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100
}


// --------------------------------------

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
testResults()

    // display entire expression? DISPLAY.textContent = `${operandA} ${op} ${operandB} = ${answer}`
}

// -----------------------------------------



