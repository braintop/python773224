//Function Declaration
function sum1(a, b) {
    let sum = a + b
    return sum
}
//Function expression  
let sum2 = function (a, b) {
    let sum = a + b
    return sum
}
//Function arrow   =  פונקצית חץ 
let sum3 = (a, b) => {
    let sum = a + b
    return sum
}
let div1 = (a, b) => {
    let sol = a / b
    return sol
}
let lengthOdString = (str) => {
    return str.length 
}



let x1 = sum1(1, 1)
let x2 = sum2(2, 2)
let x3 = sum3(3, 3)
console.log(x1)
console.log(x2)
console.log(x3)

let f = ()=>{}

// () => {} 
// (a, b) => {} 
// (a) => {} 

