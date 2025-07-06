function f() {
    console.log("1")
}
function a() {
    f()
    console.log("2")
}
function b() {
    a()
    console.log("3")
}

b()//f, a , b 