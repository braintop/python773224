//478
function addNumbers(){
    let arr = []
    for(let i=0; i<10; i++){
        let num = 1 +  Math.floor(Math.random()*200) 
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





