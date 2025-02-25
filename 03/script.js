//DATATYPES & OPERATORS
console.log("datatypes")
//NUMBER DATATYPE 
console.log('1. NUMBER DATATYPE')
let a = 3.14
let b = 20
console.log(a + b)
console.log(a*b + 50)

//STRING DATATYPE
//+ string concatenation
//* used to convert string into number

console.log("2. STRING DATATYPE")
let firstName = ("john")
const lastName = "doe"
console.log(firstName)
console.log(firstName + lastName)
console.log(lastName + " " + firstName)
console.log(a + 'b')//3.14b
console.log('2' + '2') //22
console.log(2 + '3')//23
console.log('2' * '3') //6
console.log(5 * '2')//10

//BOOLEAN DATATYPE....true-> 1 | false ->0
console.log('3. BOOLEAN DATATYPE')
let isLoggedIn = false;
console.log(isLoggedIn)
console.log(isLoggedIn + 5)//6 //5
console.log(isLoggedIn - 10)//-9 //10
console.log(isLoggedIn * 6) //0

//NULL DATATYPE
console.log("4. NULL")
var lastLogginTime = null;
console.log(lastLogginTime)

//UNDEFINED DATATYPE
console.log("5. UNDEFINED ")
const onclick = undefined
console.log(onclick)

//OBJECT DATATYPE
console.log("6. OBJECTS ")
let person = {
    firstName :"Shrutika",
    lastName :'Sonavane',
    age : 20,
    gender : 'female',

}
console.log(person)
console.log("typeof()")
//typeof is used to define the type of datatype
console.log(typeof(a))
console.log(typeof person.age)
console.log(typeof person.firstName)
console.log(typeof onclick)
console.log(typeof lastLogginTime)