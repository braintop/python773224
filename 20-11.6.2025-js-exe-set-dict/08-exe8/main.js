//brand, model, year
let cars = [
    {
        "model": "mazda2",
        "year": 1987,
        "brand": "mazda",
        "color": "blue"
    },
    {
        "model": "mazda3",
        "year": 1987,
        "brand": "mazda",
        "color": "green"
    },
    {
        "model": "mazda6",
        "year": 2000,
        "brand": "mazda",
        "color": "pink"
    }
]
//item is object 
for(let item of cars){
    //console.log(item)
    console.log(item.model + " " + item.year  + " " + item.color + " " + item.brand)
}
console.log("========================================================================")
//item is index 
for(let key in cars){
    console.log(cars[key].model + " " + cars[key].year  + " " + cars[keyi].color + " " + cars[key].brand)
}
console.log("========================================================================")

//for(let i=0;i<cars.length;i++) 
for(let i=0;i<cars.length;i++ ){
        console.log(cars[i].model + " " + cars[i].year  + " " + cars[i].color + " " + cars[i].brand)
}
console.log("========================================================================")
for(let i=0;i<cars.length;i++ ){
    console.log("=======================new car loop in loop============================================")

    let car = cars[i]
    console.log(car) 
    for(let key in car){
        console.log(car[key])
    }
}