export class Customer{
    constructor(id,customerNumber){
        this.id = id
        this.customerNumber = customerNumber
    }
}

let customer = new Customer(1,"12345")
//Prototyping
customer.name = "Abdurrahman Kürkcü"
console.log(customer.name)

Customer.something = "Some Thing"
console.log(Customer.something)

console.log(customer.customerNumber)

// super = Customer
class IndidualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName = firstName

    }
}

class CorporateCustomer extends Customer{
 constructor(companyName,id,customerNumber){
    super(id,customerNumber)
    this.companyName = companyName
        
    }
}

//map filter reduce 
let products = [
    {id:1, name: "Acer Laptop", unitprice:15000},
    {id:2, name: "Asus Laptop", unitprice:12000},
    {id:3, name: "Hp Laptop", unitprice:14000},
    {id:4, name: "Dell Laptop", unitprice:10000},
    {id:5, name: "Monster Laptop", unitprice:18000},
]

products.map(products=>console.log('${product.name}'))

