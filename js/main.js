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

function addToBuffer(str) {
    displayBuffer += str;
    document.querySelector(".display").textContent = displayBuffer;
}

function clearBuffer() {
    displayBuffer = "";
    document.querySelector(".display").textContent = displayBuffer;
}

function correctInput() {
    displayBuffer = displayBuffer.split("").pop().join("");
    document.querySelector(".display").textContent = displayBuffer;
}

function calculatorError() {
    displayBuffer = "";
    document.querySelector(".display").textContent = "ERROR";
}