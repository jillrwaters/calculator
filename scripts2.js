const SCREEN = document.querySelector(".screen")
let operands = []
let operators = []

const testResults = () => {
    console.log(`operands: ${[operands]} | operators: ${[operators]}`)
}
const inputNum = (entry) => {
    let data = entry.textContent
    if ((SCREEN.textContent).length < 11) SCREEN.textContent === "0" ? SCREEN.textContent = entry : SCREEN.textContent += entry
}

const updateScreen = (data) => {
    SCREEN.textContent = `${data}`
}

const clearEverything = () => {
    updateScreen('0')
    operationExecuted = false
    operands = []
    operators = []
    expression = []
    testResults()
}



const newOpd = () => {
    operands.push(SCREEN.textContent)
    updateScreen('')


    testResults()
}


const newOpt = (data) => {
    operators.push(data)

}
let opdA
let opdB

let opt

const calculate = () => {
    for (let i=0;i<operands.length;i++){
        for (let t in operators){
            opdA = operands[i]
            operands.shift()
            opdB = operands[i]
            operands.shift()
            opt = operators[i]
            operators.shift()
            operate(opt, opdA, opdB)
        }
    }

    
    console.log(operands, operators)
    
}


const operate = (op, a, b) => {
    switch (op) {
        case "+":
            SCREEN.textContent = `${roundTwoDecimals(add(a, b))}`;
            break;
        case "-":
            SCREEN.textContent = `${roundTwoDecimals(subtract(a, b))}`;
            break;
        case "*":
            SCREEN.textContent = `${roundTwoDecimals(multiply(a, b))}`;
            break;
        case "/":
            SCREEN.textContent = `${roundTwoDecimals(divide(a, b))}`;
            break;
    }

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

const isInt = (n) => {
    return n % 1 === 0;
}

const roundTwoDecimals = (num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100
}