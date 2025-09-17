function arrAverage(numbers){
    let sum = 0 
    for(let i=0;i<numbers.length;i++){
        sum+= numbers[i]
    }
    let avg = sum/numbers.length
    return avg 
}
//a. 
// let arr = [1,2,3,4,500]
// let avg = arrAverage(arr)
// console.log(avg)
// alert(avg)

//b
let arr = [] 
for(let i=0;i<5;i++){
    let num = +prompt("enter a number: " + (i+1))
    arr.push(num)
}
let avg = arrAverage(arr)
console.log(avg)
alert("Average is :" + avg)

