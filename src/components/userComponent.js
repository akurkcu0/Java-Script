import { BaseLogger, ElastcLogger, MongoLogger } from "../crossCutingConcerns/logging/logger.js"
import Customer from "../models/cutomer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component Yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Abdurrahman","KÜRKCÜ","ADANA")
let user2 = new User(2,"Engin","Demiroğ","ANKARA")

userService.add(user1)
userService.add(user2)


console.log(userService.list())

console.log(userService.getById(2))

//prototyping
// let customer = {id:1,firstName:"Abdurrahman"}
// customer.lastName = "KÜRKCÜ"
// console.log(customer.lastName)

console.log("-------------------")
userService.load()

let customerToAdd = new Customer(6,"Burhan","Kıreker","ADANA",50)
customerToAdd.type = "customer"


userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())