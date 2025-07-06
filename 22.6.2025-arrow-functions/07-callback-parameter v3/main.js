function random1(min, max) {
    let n = min + Math.floor(Math.random() * (max - min))
    return n 
}
/*
callback : function that return number between  min to  max 
minimum : the min number 
maximum : the max number
*/
function f(callback, minimum, maximum) {
    let x = callback(minimum, maximum)
    console.log(x) 
}
f(random1, 5, 100)
