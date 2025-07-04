"use strict";     // Treat all Js code as newer version
let name ="Snehal"  //String Datatypes
let age = 28        // number datatype
let isloggedIN = false  //Boolean datatype 

/* we have some more datatype like
Null => Standalone Value
Undefine => whenyou dont define any value
Symbol => unique value
Object => derived dataType
*/

console.log(typeof "abc")
console.log(typeof null)  //object
console.log(typeof age)
console.log(typeof undefined)

// conversion

let score ="33abc"
console.log(typeof score)
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// Conversion on Boolean

let Data = 1
let NewData = Boolean(Data)
console.log(NewData)

let Data1 = ""
let NewData1 = Boolean(Data1)
console.log(NewData1)

let Name1 = "Snehal"
let NewName = Boolean(Name1)
console.log(NewName)


