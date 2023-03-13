let operands = [12,7,5,3]
let operators = ["+", "-", "*"]


const calculate = (numArray, symbolArray) => {
    let result = 0
    for (let i = 0; i < numArray.length; i++) {
        for (let k = 0; k < symbolArray.length; k++) {
            let previous = numArray[0]
            let next = numArray[1]
            let operator = symbolArray[0]

            result = operate(operator, previous, next)

            symbolArray = symbolArray.slice(1)
            numArray = numArray.slice(2)
            numArray.unshift(result)
        }
    }
}

const operate = (op, a, b) => {
    switch (op) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            return a / b;
            break;
    }

}

calculate(operands, operators)