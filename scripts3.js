const SCREEN = document.querySelector(".screen")
const NUMBERS = Array.from(document.querySelectorAll(".number"))


const hasDecimal = (data) => {
    return Array.from(SCREEN.textContent.toString()).includes(".")
}
// add event listeners to number buttons
NUMBERS.forEach(function (num) {
    num.addEventListener("click", function (e) {

        if ((SCREEN.textContent).length < 11){
           if (SCREEN.textContent == 0) {
                SCREEN.textContent = e.target.textContent
            }
            else if (SCREEN.textContent === '0.'){
                console.log("what in the everloving FUCK")
                SCREEN.textContent = `0.${e.target.textContent}`
            }
            else {
                SCREEN.textContent += `${e.target.textContent}`
            }
        }

    })
})

// handle decimals
const DECIMAL = document.querySelector(".decimal")
DECIMAL.addEventListener("click", function(e){
        if (!hasDecimal(SCREEN.textContent))  {   
            SCREEN.textContent += `${e.target.textContent}`
        }
})


// update the screen
const updateScreen = (data) => {
    SCREEN.textContent = `${data}`
}

// clear the screen
const CLEAR = document.querySelector(".clear")
CLEAR.addEventListener("click", function (e) {
    SCREEN.textContent = `0`
    operators = []
    operands = []
    e.target.classList.remove(".operated")
    testing()
})

const OPERATORS = Array.from(document.querySelectorAll(".operator"))
// initialize arrays for operands and operators
let operands = []
let operators = []
// add event listeners to operators
OPERATORS.forEach(function (op) {
    op.addEventListener("click", function (e) {
        // push whatever is on screen to operands
        operands.push(SCREEN.textContent)
        // push operator pressed to operators
        operators.push(e.target.textContent)
        updateScreen('')
        testing()


    })
})

// -------testing function
const testing = () => {
    console.log(`operands: [${operands}] | operators: ${operators}`)
}
// -------

const EQUALS = document.querySelector(".equals")
// add event listener to equals button
EQUALS.addEventListener("click", function (e) {
    operands.push(SCREEN.textContent)
    testing()
    calculateOne()
    // handle more than 2 operands
    if (operands.length > 2) {
        calculateMultiple(operands, operators)
    }
})

// perform simple calculation with 2 operands only
const calculateOne = () => {
    // operands.push(SCREEN.textContent)
    updateScreen(operate(operators[0], operands.slice(-2)[0], operands.slice(-1)))
}

// perform string of calculations with multiple operators and operands
const calculateMultiple = (numArray, symbolArray) => {
    let result = 0
    // iterate over operands
    for (let i = 0; i < numArray.length; i++) {
        // iterate over operators
        for (let k = 0; k < symbolArray.length; k++) {
            let previous = numArray.slice(-2)[0]
            let next = numArray.slice(-1)
            let operator = symbolArray[0]

            result = operate(operator, previous, next)
            // remove the operator that was just used
            symbolArray = symbolArray.slice(1)
            // remove the operands that were just used
            numArray = numArray.slice(2)
            // put the previous result as the first operand for a new operation
            numArray.unshift(result)
        }
    }
    updateScreen(result)
}

const operate = (op, a, b) => {
    a = parseFloat(a)
    b = parseFloat(b)
    switch (op) {
        case "+":
            return roundTwoDecimals(a + b);
            break;
        case "-":
            return roundTwoDecimals(a - b);
            break;
        case "*":
            return roundTwoDecimals(a * b);
            break;
        case "/":
            return roundTwoDecimals(a / b);
            break;
    }
}

const roundTwoDecimals = (num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100
}