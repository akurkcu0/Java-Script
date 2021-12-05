// function addToCart(quantity,productName="Elma") {
//     console.log("Sepete Eklendi : " + productName + " Adet " + quantity)
    
// }
// // addToCart()
// // addToCart("Yumurta",10)
// // addToCart("Karpuz")
// addToCart(10)

// let sayHello = ()=>{
//     console.log("Hello World")
// }

// sayHello()

// let sayHello2 = function () {
//     console.log("Hello World 2")
// }

// sayHello2()

// function addToCart2(productName,quantity,unitPrice) {
//     console.log(productName + quantity + unitPrice)
    
// }

// addToCart2("Elma",5,10)
// addToCart2("Armut",2,20)
// addToCart2("Limon",3,15)
// **********
// let product1 = {productNmae: "Elma", unitPrice:10, quantity: 5} //obje
// function addToCart3(product) {
//     console.log("Ürin : "+product.productNmae)
//     console.log("Adet : "+product.quantity)
//     console.log("Fiyat : "+product.unitPrice)
// }
// addToCart3(product1)

// let product2 = {productNmae: "Elma", unitPrice:10, quantity: 5}
// let product3 = {productNmae: "Elma", unitPrice:10, quantity: 5}
// product2 = product3
// product2.productNmae = "KARPUZ"
// console.log(product3.productNmae) // çıktısı KARPUZ'DUR çünkü obje olduğu için referans tiptir sayılar ise değer tiptir

// let sayi1 = 10
// let sayi2 = 20
// sayi1 = sayi2
// sayi2 = 100
// console.log(sayi1) // değer tiplerde değer atandığında işi biter 20'yi atadık bitti.Atadıktan sonra sayi2 ile olan bütün bağ biter


// function addToCart4(products) {
//     console.log(products)
// }

// let products = [
//     {productNmae: "Elma", unitPrice:10, quantity: 5},
//     {productNmae: "Armut", unitPrice:10, quantity: 5},
//     {productNmae: "Karpuz", unitPrice:10, quantity: 5}
// ]
// addToCart4(products)


// function add(number1,number2) {
//     console.log(number1 + number2)
    
// }

// function add(...numbers) { //fonksiyonun içerisinde ... ile tanımlama yapılırsa REST operatöürüdür.
//     let total = 0
//     for (let i = 0; i < numbers.length; i++) {
//         total +=  numbers[i]
//     }
    
//     console.log(total)
// }
// // REST operatörünün dışında başka bir parametre var ise onu restten önce tamımla
// //function add(bisey, ...numbers) gibi tanımlanmalıdır 
// add(20,60)
// let numbers = [30,10,500,456,876]
// console.log(Math.max(...numbers))
// //----------------------------------------*****
// let [regions,regions2,regions3,[icAnadolu,marmara,karadeniz]] = [
//     {name: "İç Anadolu", population : "20M"},
//     {name: "Marmara", population : "30M"},
//     {name: "Karadeniz", population : "15M"},
//     [
//         ["Ankara","Konya"],
//         ["İstanbul","Bursa"],
//         ["Rize","Trabzon"],
//     ]
// ]

// console.log(regions.name)
// console.log(regions.population)
// console.log(regions2)
// console.log(regions3)
// console.log(icAnadolu)
// console.log(marmara)
// console.log(karadeniz)

// let newProductName,newUnitPrice,newQuantity
// ({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity} 
//     = {productName: "Elma", unitPrice:10, quantity: 5})

// console.log(newProductName)
// console.log(newUnitPrice)
// console.log(newQuantity)

