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

//Case 5 lets try to conver into Boolean

let isloggedIn = 1
let booleanIsloggedIn = Boolean(isloggedIn)
console.log(typeof booleanIsloggedIn)    //boolean
console.log(booleanIsloggedIn)           // True

// Case 6 lets try to convert empty string

let isloggedIn1 = ""
let booleanIsloggedIn1 = Boolean(isloggedIn1)
console.log(typeof booleanIsloggedIn1)    //boolean
console.log(booleanIsloggedIn1)           // False  When empty string then value is False 
                                          // When there is some value its shows True
 
// String convert into boolean value is there then True
// Empty String Converted into Boolean then value is shown False.


// Case7 Lets convert into string 

let variableToString = 33
let NumberToString = String(variableToString)
console.log(typeof NumberToString)
console.log(NumberToString)
                                          
