// Lets learn about operations in JavaScript

let value =4
let negValue = -value
console.log(negValue)

// Case string operation

let FirstName = "Snehal "
let LastName = "Kadlag"
let FullName = FirstName+LastName
console.log(FullName) 

//Case Prefix operation

let GameCounter = 100
let UpdatedScore = ++GameCounter
console.log(GameCounter)                //101 value get Increase before Assigning
console.log(UpdatedScore)              //101 updated value


//Case Postfix operation

let CounterValue = 100
let NewScore = CounterValue++
console.log(CounterValue)             //101 Counter value get increase after assigning
console.log(NewScore)                //100 in Post case assignment is done first then value is increased
