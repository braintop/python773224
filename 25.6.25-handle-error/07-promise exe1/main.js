function play() {
    let min = +document.getElementById("min").value
    let max = +document.getElementById("max").value

    generate7BoomAfterDelayAsync(min, max)
        .then((success) => { console.log(success) })
        .catch((err) => { console.log(err) })
}

function generate7BoomAfterDelayAsync(min, max) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let number = min + Math.floor(Math.random() * (max - min))
            if (number % 7 == 0 || number % 10 == 7) {
                resolve(number + ":boom took 1000$")
            }
            else {
                reject(number + ":loose 1000$")
            }
        }, 1000);
    });
    return p;
}

