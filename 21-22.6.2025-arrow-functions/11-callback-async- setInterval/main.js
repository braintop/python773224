function stam() {
    counter = 0
    setInterval(() => {
        counter++
        console.log(counter)
    }, 1000)// every second
}
stam()
//v1 
function cool1(paintCallback) {
    paintCallback();
}
function randomColor1() {
    let arr = ["red", "blue", "brown", "orange"]
    let number = Math.floor(Math.random() * arr.length)
    console.log(arr[number])
}
cool1(randomColor1)



//v2 
function cool2(paintCallback) {
    let x = paintCallback();
    console.log(x)
}
function randomColor2() {
    let arr = ["red", "blue", "brown", "orange"]
    let number = Math.floor(Math.random() * arr.length)
    return  arr[number]
}
cool2(randomColor2)