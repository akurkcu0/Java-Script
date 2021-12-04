
// // console.log("Hello")

// // let arabaKredileri = ["Sıfır Araç Kredisi", "2.el Araç kredisi" , "Motorsiklet Kredisi"]

// // for (let i = 0; i < arabaKredileri.length; i++) {
// //     console.log(arabaKredileri[i]);
    
// // }

// let student = { id:1, name:"Abdurrahman"}
// console.log(student)

// function save(grade=10,student2){
//     console.log(student2.name + " : " + grade)
// }

// save(undefined,student)

// let student3 = ["Engin", "Abdurrahman", "Halit", "Çağla"]

// console.log(student3)

// let student4 = [student,{id:2, name:"Çağla"},"Adana",{city:"İstanbul"}]

// console.log(student4)
// //rest
// //params
// //varArgs
// let showProducts = function (id,...products){
//     console.log(id)
//     console.log(products[0])
// }

// // console.log(typeof showProducts)
// // showProducts(10 , ["Elma","Armut"])

// let points = [1,2,3,4,56,87,21,6,7,45]
// console.log(...points)
// // console.log(Math.max(points)) = NaN
// console.log(Math.max(...points))
// console.log(..."ABC","D",..."EFG","H")

// //Destructuring
// let populations = [10000,20000,30000,[40000,100000]]
// let [small,medium,high,[veryHigh,maximum]] = populations
// console.log(small)
// console.log(medium)
// console.log(high)
// console.log(veryHigh)
// console.log(maximum)

// function someFunction([small1,number]){
//     console.log(small1)
// }

// someFunction(populations)

// let category = {id:1, name:"Drink"}
// console.log(category.id)
// console.log(category["name"])

// let {id,name} = category
// console.log(category.id)
// console.log(category["name"])


// =======
// console.log("Merhaba Kodlama.io")

// //JS type safe değildir
// let dolarBugun = 9.30

// let dolarDun = 9.20
// dolarDun = "9.20"
// {
//     let dolarDun = 9.10
// }

// console.log(dolarDun)

// const euroDun = 11.2
// //euroDun = 11

// console.log(euroDun)

// //array
// //camelCasing
// //PascalCasing
// let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

// console.log("<ul>")
// for(let i = 0;i<konutKredileri.length;i++){
//     console.log("<li>"+konutKredileri[i]+"</li>")
// }
// console.log("</ul>")

// {/* <ul>
//     <li>Konut kredisi</li>
//     <li>Emlak Konut Kredisi</li>
//     <li>Kamu Konut Kredisi</li>
// </ul> */}

// console.log(konutKredileri)



