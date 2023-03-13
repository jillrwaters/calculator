const SCREEN = document.querySelector(".screen")
let operands = []
let operators = []

const testResults = () => {
    console.table(`operands: ${[operands]} | operators: ${[operators]} | operands[0]: ${operands[0]}`)
}

const hasDecimal = (data) => {
    return Array.from(SCREEN.textContent.toString()).includes(".")
}

const inputNum = (entry) => {
    if ((SCREEN.textContent).length < 11)
        if (entry === "."){
            if (!hasDecimal(SCREEN.textContent))  SCREEN.textContent += entry
        }
        else if (SCREEN.textContent === "0") {
            updateScreen(entry)
        }
        else {
            SCREEN.textContent += entry
        }

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
    return operands

    testResults()
}


const newOpt = (data) => {
    if (data !== "=") {
        operators.push(data)
    }
    return operators
    testResults()
}


const calculate = (numArray, symbolArray) => {
    let result = 0
    for (let i = 0; i < numArray.length; i++) {
        for (let k = 0; k < symbolArray.length; k++) {
            let previous = numArray[0]
            let next = numArray[1]
            let operator = symbolArray[0]

            operate(operator, previous, next)

            operators = symbolArray.slice(1)
            numArray = numArray.slice(2)
            numArray.unshift(result)
        }
    }
    SCREEN.textContent = `${numArray[0]}`


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