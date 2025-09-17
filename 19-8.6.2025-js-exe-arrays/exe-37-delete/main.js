//478
function addNumbers(){
    let arr = []
    for(let i=0; i<50; i++){
        let num = 1 +  Math.floor(Math.random()*10) 
        arr.push(num)
    }
    return arr 
}

function ifExist()
{
   let numbers = addNumbers() 
   console.log(numbers)
   let num = +prompt("enter numer")
   if(   numbers.includes(num)){ // indexof return index of number and if not exist return -1 
       alert(num + " exist")
   }
   else{
        alert(num + " not exist")
   }  
}
function countNumber()
{
   let numbers = addNumbers() 
   console.log(numbers)
   let number = +prompt("enter number")
   let counter = 0 
   for(let i=0;i<numbers.length;i++){
       if(numbers[i] == number){
           counter++
       }
   }//enf of for 
   alert(counter)
}






