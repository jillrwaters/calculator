const SCREEN = document.querySelector(".screen")
let operands = []
let operators = []

const testResults = () => {
    console.table(`operands: ${[operands]} | operators: ${[operators]} | expression: ${{expression}}`)
}

const hasDecimal = () => {
    return Array.from(SCREEN.textContent.toString()).includes(".")
}

const inputNum = (entry) => {
    let data = entry.textContent
    // if (SCREEN.classList.contains(".calculated")){
    //     SCREEN.textContent = ""
    // }
    if (entry || (entry === "." && !hasDecimal())) {
        if ((SCREEN.textContent).length < 11) SCREEN.textContent === "0" ? SCREEN.textContent = entry : SCREEN.textContent += entry

    }

    testResults()

    // if operate hasn't already run
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
    operands.push(parseFloat(SCREEN.textContent))
    updateScreen('')


    testResults()
}


const newOpt = (data) => {
    if (data !== "="){
    operators.push(data)
    }
    testResults()
}
let opdA
let opdB

let opt
let expression = []

const calculate = () => {
    let result = 0
    for (let i=0;i<operands.length;i++){
    for (let k=0;k<operators.length;k++){
        let previous = operands[0]
        let next = operands[1]
        let operator = operators[0]
        
        operate(operator, previous, next)

        operators = operators.slice(1)
        operands = operands.slice(2)
        operands.unshift(result)
    }
}
    SCREEN.textContent = `${operands[0]}`
   

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