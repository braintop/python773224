//478
function exe34v1(){
    let num = +prompt("enter a number")
    let digits = 0
    while(num!=0){
        num = Math.floor(num/10);
        digits++
    }
    alert(digits)
}

function exe34v2(){
    
    let num = +prompt("enter a number")
    num = Math.abs(num)
    alert(num.toString().length)
}
