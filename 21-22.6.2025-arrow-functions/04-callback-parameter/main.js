function printName() {
    console.log("oren")
}
function printAdress() {
    console.log("telaviv")
}
function fireMan() {
    console.log("fire fire")
}

function policeMan() {
    console.log("police police hands up")
}

function f(callback) {
    callback()
}

function sum(a, b) {
    return a + b
}
let x = sum(5, 7)
f(printName)
f(printAdress)
f(fireMan)
f(policeMan)
