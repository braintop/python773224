function test(){
    let arr = [1,2,3,4,1,2,2,3,3,3]
    let s = new Set(arr)
    console.log(s) // 1,2,3,4
}

// add 
// delete 
//has 
//size

//test()

//scan set 
function scanSet(){
    let items = new Set()
    for(let i=0;i<10000;i++){
        let number = Math.floor(Math.random()*100)
        items.add(number)
    }
    console.log("===================let item of items ==================================")
    for(let item of items){
        console.log(item)
    }
}
scanSet()
