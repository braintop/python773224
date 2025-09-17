//brand, model, year
let car = {
    "model":"mazda2",
    "year":1987,
    "brand":"mazda"
}
console.log("=====================car============")
console.log(car)
console.log("=====================add color============")
car.color = "blue"
console.log(car)
console.log("=====================update year============")
car.year = 2025
console.log(car)
console.log("=====================model deleted")
let model = "model"
// delete car["model"]
// delete car[model]
delete car.model 
console.log(car)

let student = {
    grade:78,
    name:"oren"
}
console.log(student)

//title, author, pages
let book = {
    pages:123,
    author:"sergei",
    title:"bla bla bla"
}
for(let key in book){
    console.log(key)
    console.log(book[key])
}

function numOfKeys(dict){
    let keys = Object.keys(dict)
    console.log(keys) // [    ]
    console.log(book)

    return keys.length
}

alert(numOfKeys(book))


//name, price, inStock
let products = [
    {
        name:"ball",
        price:45,
        inStock:20
    },
    {
        name:"tshirt",
        price:30,
        inStock:100
    },
    {
        name:"iphone",
        price:4750,
        inStock:2
    }
]

for(let i=0;i<products.length;i++){
    console.log(products[i]["name"]) 
    console.log(products[i]["price"])
    console.log(products[i]["inStock"])
}
for(let i=0;i<products.length;i++){
    console.log(products[i].name)
    console.log(products[i].price)
    console.log(products[i].inStock)
}

for(let i=0;i<products.length;i++){
    let product = products[i]
    console.log(product.price)
    console.log(products.inStock)
    console.log(products["inStock"])
}