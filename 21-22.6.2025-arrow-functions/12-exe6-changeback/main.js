function amazing(paintCallback) {
    const paintedColor = paintCallback("Red", "Green", "Blue");
    console.log("Painted Color: " + paintedColor);
    document.body.style.background = paintedColor

}
function randomColor1(c1, c2, c3) {
    let arr = [c1, c2, c3]
    let index = Math.floor(Math.random() * arr.length)
    return arr[index]
}
amazing(randomColor1)


