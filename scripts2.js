const SCREEN = document.querySelector(".screen")

const testResults = () => {
    console.log(`opdA: ${opdA} | opdB: ${opdB} | optA: ${optA} | optB: ${optB} | SCREEN.textContent: ${SCREEN.textContent}`)
}
const inputNum = (entry) => {
    let data = entry.textContent
    let screen = ""
    if (screen.length < 11) SCREEN.textContent === "0" ? SCREEN.textContent = entry : SCREEN.textContent += entry 
}

const updateDisplay = (data) => {
    SCREEN.textContent = `${data}`
}

const clearEverything = () => {
    opdA = ""
    opdB = ""
    optA = ""
    optB = ""
    updateDisplay('0')
    operationExecuted = false
}

let opdA
let opdB
const newOpd = (data) => {
    !opdA ? opdA = SCREEN.textContent : opdB = SCREEN.textContent
    updateDisplay('0')
    newOpt(data)
    testResults()
}

let optA
let optB
const newOpt = (data) => {
    !optA ? optA = data : optB = data
}

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

const isInt =(n) => {
    return n % 1 === 0;
 }

const roundTwoDecimals = (num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100
}

let operationExecuted = false
const operate = (op, a, b) => {
    if (operationExecuted){ optB(op) }


    switch (op) {
        case "+":
            DISPLAY.textContent = `${roundTwoDecimals(add(a, b))}`;
            break;
        case "-":
            DISPLAY.textContent = `${roundTwoDecimals(subtract(a, b))}`;
            break;
        case "*":
            DISPLAY.textContent = `${roundTwoDecimals(multiply(a, b))}`;
            break;
        case "/":
            DISPLAY.textContent = `${roundTwoDecimals(divide(a, b))}`;
            break;
    }

    operationExecuted = true
}