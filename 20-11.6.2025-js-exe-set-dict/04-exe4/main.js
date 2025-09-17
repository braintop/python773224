function test(){
    let list = new Set()
    for(let i=0;i<10000;i++){
        let number = Math.floor(Math.random()*100)
        list.add(number)
    }
    //alert(list.size)
    console.log(list)
    let number = +prompt("enter a number")
    if(list.has(number)){
        alert(number + " exist")
    }
    else{
        alert(number + " not exist")
    }
    //[1,2,3,54,65,5,5,5,6,76,87,8,8,9....]
    for(let item of list){
        console.log(item + " : Power: " +  item*item ) 
            
    }

}

// add 
// delete 
//has 
//size

test()

