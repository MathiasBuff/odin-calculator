let displayBuffer = document.querySelector(".display").textContent;

let memory = null;
let memoryOperator = null;

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
    button.addEventListener("click", event => {
        addToBuffer(event.target.textContent);
    });
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
    button.addEventListener("click", event => {
        operate(event.target.id, readBuffer());
    });
});

document.querySelector(".result").addEventListener("click", _ => {
    operate("equal", readBuffer());
});

document.querySelector("#clear").addEventListener("click", _ => {
    clearBuffer();
    memory = null;
});
document.querySelector("#correct").addEventListener("click", _ => correctInput());


function readBuffer() {
    let n = Number(displayBuffer);
    if (n == NaN) {
        calculatorError();
        return null;
    } else {
        return n;
    }
}

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function percent(n) {
    return n / 100;
}

function negate(n) {
    return -n;
}

function operate(operator, buffer) {
    let result;
    if (operator === "negate" || operator === "percent") {
        if (operator === "negate") result = negate(buffer ? buffer : memory);
        else result = percent(buffer ? buffer : memory);
    } else {
        if (!memoryOperator) {
            result = buffer ? buffer : memory;
        } else {
            console.log(memoryOperator);
            switch (memoryOperator) {
                case "add": {
                    result = add(memory, buffer);
                    break;
                }
                case "substract": {
                    result = substract(memory, buffer);
                    break;
                }
                case "multiply": {
                    result = multiply(memory, buffer);
                    break;
                }
                case "divide": {
                    result = divide(memory, buffer);
                    break;
                }
                case "equal": {
                    result = readBuffer() ? readBuffer() : memory;
                    break;
                }
            }
        }
        memoryOperator = operator;

    }
    memory = result;
    clearBuffer();
    display(String(result));
}

function display(message) {
    if (message.length > 6) {
        message = message.split("").slice(0, 6).join("") + "...";
    }
    document.querySelector(".display").textContent = message;
}

function addToBuffer(str) {
    displayBuffer += str;
    display(displayBuffer);
}

function clearBuffer() {
    displayBuffer = "";
    display(displayBuffer);
}

function correctInput() {
    console.log(displayBuffer);
    displayBuffer = displayBuffer.split("");
    displayBuffer.pop();
    displayBuffer = displayBuffer.join("");
    display(displayBuffer);
}

function calculatorError() {
    displayBuffer = "";
    display("ERROR");
}