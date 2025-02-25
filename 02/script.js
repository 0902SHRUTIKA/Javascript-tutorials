//VARIABLES/ var
console.log("use of var")
var age = 30
console.log(age)

age = "abc";
console.log(age)

var firstName = "shrutika";
console.log(firstName)

var lastName = "sonavane"
console.log(lastName)

var num1 = 10
var num2 = 30
console.log(num1 + num2)

//var is a global variable means it is accessible out of the scope means i am able to use it in console as well
console.log("use of global scope")
{
    var a ="TRYING TO UNDERSTAND GLOBAL SCOPE"
}

console.log(a)

//let :- scope of let is local means it is accessible only in given scope
console.log("use of let")
{
    let b = 50
    console.log(b)
}

{
    let c = "hello"
    let d = (100)
    console.log(d)
}

let x, y;
x = 44;
y = 20;
console.log(x-y)

//const :- scope is local and given value is unchangeable
console.log("use of constant")
const m = 30;
console.log(m)
console.log(m * 4)