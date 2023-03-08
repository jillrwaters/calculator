// constants
const BUTTONS = [...document.querySelectorAll("button")]
const NUMBER_BUTTONS =  [...document.querySelectorAll("button .numbers")]
const DISPLAY = document.querySelector("#display")
const OPERATORS = [...document.querySelectorAll(".operators")]

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
    return func(a,b)
}

const populateNumButtons = () => {
    

}