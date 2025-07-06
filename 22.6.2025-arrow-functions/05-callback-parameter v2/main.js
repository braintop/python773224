function random1() {
    let n = Math.floor(Math.random() * 100)
    console.log(n)
}

function f(callback) {
    callback()
}
f(random1)
