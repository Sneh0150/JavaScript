// Now we have data coming from front End and It can be some time  messy data
// as we expect Number but it might be send you String data so type coversion
// comes into picture.



// Case 1 suppose i have a variable score and user has provided 
// me with number 

let score =33
console.log(typeof score)               //number

let ValueInNumber = Number(score)
console.log(typeof ValueInNumber)      //number
console.log(ValueInNumber)             //33


//Case 2 If user gives input score=33marks

let score1 = "33mrk"
console.log(typeof score1)               //String

let ValueInNumber1 = Number(score1)
console.log(typeof ValueInNumber1)      //number
console.log(ValueInNumber1)             //NAN



//Case3 If User gives input score = null

let score2 = null
console.log(typeof score2)               //object

let ValueInNumber2 = Number(score2)
console.log(typeof ValueInNumber2)      //number
console.log(ValueInNumber2)             //0



//Case4 If user doesnot provide any value

let score3 = undefined 
console.log(typeof score3)               //undefined

let ValueInNumber3 = Number(score3)
console.log(typeof ValueInNumber3)      //number
console.log(ValueInNumber3)             // NaN