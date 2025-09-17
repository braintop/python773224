function test(){
    let arr = new Set() 
    for(let i=0;i<5;i++){
        let number = +prompt("enter a num")
        arr.add(number)
    }
    arr.add("hello")
    console.log(arr)

    if(arr.has(3)){
        alert("3 exist")
    }
    if(arr.has("hello")){
        alert("hello exist")
    }
    if(arr.has(100)){
        arr.delete(100) // delete value 100 
        alert("100 removed")

    }
}

// add 
// delete 
//has 

test()

