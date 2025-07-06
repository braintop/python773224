function handleSuccess(name) {
    alert(name)
}

function handleError(err) {
    alert(err)
}
function isBiggerThan5(successCallback, errorCallback) {
    setTimeout(() => {
        let name = prompt("enter your name")
        if (name.length > 5) {
            successCallback("success enter your name");
        }
        else if (name.length > 0 && name.length < 5) {
            errorCallback("error. name has to be longer than 5 characters");
        }
        else if (name.length == 0) {//""
            errorCallback("error. name cant be than 0 characters");
        }
    }, 5000);
}
isBiggerThan5(handleSuccess, handleError);
