// constants
const DISPLAY = document.querySelector(".display")
// operators
let optA
let optB
// display value
let dV = DISPLAY.textContent
// operands
let opdA
let opdB

// -------------------------------- NEW OBJECT - BELOW

let info = {
    opdA: "",
    opdB: "",
    optA: "",
    optB: ","
}

// ------------------------------- ^ NEW OBJECT ^



// -------------------- math functions 
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
// ------------------- ^ math functions ^

const testResults = () => {
    console.log(`opdA: ${opdA} | opdB: ${opdB} | optA: ${optA} | optB: ${optB} | dV: ${dV} | `)
}



// ------------------------------------- change screen info - below -------------------------------------------------- keep
// -------------------- replace function below with updateDisplay() ?
const inputNum = (num) => {
    if (DISPLAY.textContent.length < 11) { // if less than 11 chars, check following:
        DISPLAY.textContent === "0" ? DISPLAY.textContent = `${num}` : DISPLAY.textContent += `${num}`;
    }
}
// ------------------ ^ replace function with updateDisplay() ? no. keep the same ^
const updateDisplay = (info) => {
    // triggered inside another function after storing info or doing calculation
    DISPLAY.textContent = `${info}`
}
// ^ NEW FUNCTION ^
const clearEverything = () => {
    dV = ""
    DISPLAY.textContent = "0"
    optA = ""
    opdA = ""
    opdB = ""
}
// -------------------------------------- ^ change screen info ^ --------------------------------------------------- ^ keep ^


// -------------------------------------- store info - below

const newOpd = (btn) => {
    // triggered when [?]. stores last operand pressed
    let final = '' // return value = newest operand stored ???
    dV = DISPLAY.textContent // 
    optA = btn
    !opdA ? opdA = parseFloat(dV) : opdB = parseFloat(dV);
    // the new operand is what and is stored where???
}
// ^ EDITING FUNCTION  ^

const newOpt = (btn) => {
    // store number that has been input so far, trigger when any operand is pressed
} 

// ^ NEW FUNCTION ^
// -------------------------------------- ^ store info ^


// --------------------------------------

const operate = (op) => {
    if (!opdB) {
        opdB = parseFloat(DISPLAY.textContent)
    }


    switch (op) {
        case "+":
            DISPLAY.textContent = `${roundTwoDecimals(add(opdA, opdB))}`;
            break;
        case "-":
            DISPLAY.textContent = `${roundTwoDecimals(subtract(opdA, opdB))}`;
            break;
        case "*":
            DISPLAY.textContent = `${roundTwoDecimals(multiply(opdA, opdB))}`;
            break;
        case "/":
            DISPLAY.textContent = `${roundTwoDecimals(divide(opdA, opdB))}`;
            break;
    }
testResults()

    // display entire expression? DISPLAY.textContent = `${opdA} ${op} ${opdB} = ${answer}`
}

// -----------------------------------------



