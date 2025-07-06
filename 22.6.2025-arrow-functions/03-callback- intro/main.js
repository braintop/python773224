function printName() {
    console.log("oren")
    //return "blala"
}

let s = printName;
let z = printName;// z is referance 
// printName
// printName()  - סוגרים מפעיל פונקציה 

console.log(s()) // oren , undefined 
s()
printName()
z()