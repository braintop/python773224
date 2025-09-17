function isDevide2And3(number) {
    return number % 2 == 0 && number % 3 == 0
}
let x = +prompt("enter ...")
let answer = isDevide2And3(x)
alert(answer)
for(let i=1;i<100;i++){
    let answer = isDevide2And3(i)
    console.log(i + "  - answer is : " + answer)
}