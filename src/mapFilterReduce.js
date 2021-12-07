let cart = [
    {id:1, productName : "Telefon", quantity:3, unitPrice:4000},
    {id:2, productName : "Bardak", quantity:2, unitPrice:30},
    {id:3, productName : "Kalem", quantity:1, unitPrice:20},
    {id:4, productName : "Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName : "Kİtap ", quantity:3, unitPrice:30},
    {id:6, productName : "Pot", quantity:5, unitPrice:150},
]

// cart.map(product=>console.log(product.productName))
// cart.map(product=>{
//     if (product.id == 4) {
//         console.log(product.productName)
        
//     }
// })
console.log("<ul>")
cart.map(product=>{
    console.log("<li>" + product.productName + " : " 
    + product.unitPrice * product.quantity + "</li>")
})
console.log("</ul>")

let quantityOver2 =  cart.filter(product=>product.quantity>2)
console.log(quantityOver2)
//0 acc başladığı değer
let total = cart.reduce((acc,product)=>acc + product.unitPrice * product.quantity,0)
console.log(total)

// function addToCart(cart) {
//     cart.push({id:7, productName : "Ruhsat", quantity:1, unitPrice:20})
// }

// addToCart(cart)
// //Referans tip oldugu için Ruhsatı çıktıya ekler
// console.log(cart)

// //----Değer Tip oldugu için çıktısı 10
// let sayi = 10

// function sayiTopla(number) {
//     number += 1
// }
// sayiTopla(sayi)
// console.log(sayi)
