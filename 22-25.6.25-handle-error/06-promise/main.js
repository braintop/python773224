function f(){
    let p = new Promise((resolve, reject) => {
    
    
    
    });
    return p;
}
function randomNumber() {
    // פרומיס היא אוביקט שמקבל כפרמטר פונקציה 
    //הפונקציה מקבלת כםרמטר 2 פונקציות אחת של טיפול בהצלחה ואלת לטיפול בכישלון
    let p = new Promise((resolve, reject) => {
        let number = Math.floor(Math.random() * 100)
        if (number > 50) {
            resolve(number + "success random number")
        }
        else {
            reject(number + "error random number");
        }
    });
    return p;
}
//.  () =>{} 
function f1(s){
    console.log(s)
}
function f2(e){
    console.log(e)
}
let solution1 = randomNumber()
solution1
    .then(f1)
    .catch(f2)
let solution2 = randomNumber()
solution2
    .then((success) => { console.log(success) })
    .catch((err) => { console.log(err) })


function x1(success){
    console.log(success)
}

let x2 = (success)=>{
        console.log(success)
}
