let arr = [1,2,3,100]
//arr.append(100)
arr.push(2000) // add to end 
console.log(arr)

let x = arr.pop() // שולף ןמחזיר את האיבר האחרון למשתנה איקס 
console.log(x)
console.log(arr)

let find = arr.indexOf(300)
console.log(find) // index is -1. because -1 not exist in arr 
if(find==-1){
    console.log("300 not exist in arr")
}
else {
    console.log("300  exist in arr")
}
let index = arr.indexOf(3)
console.log(index) // index is 2. index of 3 in arr is 2  
if(index>=0){
    console.log("3  exist in arr")
}
else {
    console.log("3 not exist in arr")
}
//scan arr
console.log("--------------arr items -----------------")
for(let i=0; i<arr.length;i++){ // arr.length equal to len(arr) in python
    console.log(arr[i])
}