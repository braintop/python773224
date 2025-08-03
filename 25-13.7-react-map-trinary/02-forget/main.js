//filter, map , forEach 
let arr = [1, 2, 3, 4, 10, 100, 2, 200]
// let newArr = []
// for(let i=0;i<arr.length;i++){
//     if(arr[i] >= 100){
//         newArr.push(arr[i])
//     }
// }//end of for 
// console.log(newArr)

//return new array  - מחזירה בהתאם לתנאי 
let newArr = arr.filter((item) => item >= 100)
console.log(newArr)

//return new array - משנה את כל האיבירים בהתאם ללוגיקה  שנחליט
let powers = arr.map((item) => item * item)
console.log(powers)

// return nothing  
arr.forEach((item) => {
    console.log("😯" + item + "😯")

})

let persons = [
    {
        firstname: "uri",
        age: 36
    },
    {
        firstname: "sergei",
        age: 78
    },
    {
        firstname: "sergei",
        age: 20
    },
]

let perosnsAbove30 = persons.filter((person) => person.age > 30)
console.log(perosnsAbove30)
