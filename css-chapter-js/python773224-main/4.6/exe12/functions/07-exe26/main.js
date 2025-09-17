function createTenRandomNumbersAndPrint(){

    for(let i=0;i<10;i++){
        let number = 1 + Math.floor(Math.random()*100)
        console.log(number)
    }

}

createTenRandomNumbersAndPrint()
