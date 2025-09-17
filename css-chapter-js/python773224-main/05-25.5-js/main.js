//js -  camelCase - firstName , lastName 
//python - camel_case - first_name , last_name 

// 1. output 
console.log("hello world") 
alert("hello world")

//vars 
let x = 5 
const y = 6 // קבוע שאסור לשנות 
//y = 10 // error 
console.log(x)
console.log(y)

// input -  a = input("enter num")
number1 = +prompt("enter num1") // convert from "1" to 1
console.log(number1)
number2 = +prompt("enter num2")
console.log(number1)
// "1" + "1" = "11"  | 1 + 1 = 2 
let solution = number1 + number2
console.log(number1 + "+" + number2 + "=" + solution) 


// if else 

if(number1 > number2){
    alert(number1 + " bigger than " + number2)
}
else if(number2 > number1) {
    alert(number2 + " bigger than " + number1)

}
else if(number2==number1){
    alert(number2 + " equal to " + number1)
}

//for 
console.log("=====for output=====")
for(let i = 0 ;i <10;i++){
    console.log(i)
}

//while
console.log("=====while output=====")

let j =100  
while(j<150){
    console.log(j)
    j++
}



let f = "a"
let l = "b"

alert(f + " " + l)