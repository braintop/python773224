function randomNumber1() {
    let number = Math.floor(Math.random() * 100)
    if (number > 50) {
        throw number + ":error random number"
    }
    else {
        return number;
    }
}
function mamo() {
    let number = Math.floor(Math.random() * 1000)
    if (number > 500) {
        throw number + ":error random number"
    }
    else {
        return number;
    }
}



try {
    let x1 = randomNumber1()
    let x2 = mamo()
    console.log(x1)
    console.log(x2)

}
catch (err) {
    console.log(err)
}

console.log("sergie")

