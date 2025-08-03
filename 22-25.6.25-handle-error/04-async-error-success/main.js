//בתכנות אסינכרוני לא ניתן לעבוד עם 
//try catch 
function handleSuccess(success) {
    console.log(success)
}

function handleError(err) {
    console.log(err)
}
function randomNumber(successCallback, errorCallback) {
    setTimeout(() => {
        let number = Math.floor(Math.random() * 100)
        if (number > 50) {// דימוי ל באג 
            // throw number + ":error random number"
            let err = number + ":error random number"
            errorCallback(err)
        }
        else {
            successCallback(number)
        }
    }, 20000);
}
randomNumber(handleSuccess, handleError)
console.log("hello world")
