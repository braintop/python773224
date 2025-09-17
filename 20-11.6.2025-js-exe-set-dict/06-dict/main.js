let products = {
    123:"tv",
    562:"radio",
    453:"tshirt"
}

let code = prompt("enter a code")
let product = prompt("enter product name")
products[code] = product
let c = +prompt("enter product name")
alert(products[c])

console.log(products)

for(let key in products){
    console.log("id is :" + key + " and prodcut is " + products[key])

}

code = prompt("find a code")
if (code in products)
{
    alert(products[code] + " exist")
    delete products[code]
} 
else{
    alert("code not exist")
}
console.log(products)

