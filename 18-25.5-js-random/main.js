let r1 = Math.random() // 0 - 1 
console.log(r1)

//number between 0 -100 

let r2 = Math.random() * 100 
console.log(r2)  // float number 

let r3 = Math.floor(Math.random() * 10000 ) //מעגל למטה 
console.log(r3)  // float number 


// 30 < x < 70
// 31 , 32, 33, 34 .......................70 
// at least 30 + random 0 - 40  
let r4 = 30 + Math.random() * (70 - 30 )

// min < x < max
// at least min + random max - min   
let min = 5 
let max = 45 
let r5 = min + Math.floor(Math.random() * (max - min ) )
console.log(r5)


