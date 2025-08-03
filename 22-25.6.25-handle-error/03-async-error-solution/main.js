//בתכנות אסינכרוני לא ניתן לעבוד עם 
//try catch 
function handleError(err) {
    console.log(err)
}
function randomNumber(callback) {
    setTimeout(() => {
        let number = Math.floor(Math.random() * 100)
        if (number > 50) {
            // throw number + ":error random number"
            let err = number + ":error random number"
            callback(err)
        }
        else {
            console.log(number)
        }
    }, 2000);
}
randomNumber(handleError)