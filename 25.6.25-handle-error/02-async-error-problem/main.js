//בתכנות אסינכרוני לא ניתן לעבוד עם 
//try catch 
function randomNumber() {
    setTimeout(() => {
        let number = Math.floor(Math.random() * 100)
        if (number > 50) {
            throw number + ":error random number"
        }
        else {
            console.log(number)
        }
    }, 2000);
}
try {
    randomNumber()
}
catch (err) {
    console.log(err);
}
console.log("continue...")
