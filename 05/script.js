console.log("conditional statement")
//if both conditions are satisfies then only condition ca
let age = 15;
let gender ="female"
if(age >= 10 && gender =="female"){
    console.log('both condition should be true')
}
if(age>= 10 || gender =="male")
{
    console.log("any one condition is  true then also it get executd")
}
console.log("************************************")

var a = 10;
var b = 20;
if(a == b && b>=a){
    console.log('condition satisfied')
}
if(a == b || b >= a){
    console.log('condition satisfied')
}

console.log('AND operator preserves non-Boolean values and returns them as they are:')
result = " " && " hii"//hii " " (a space string) is truthy.
// " hii" is also truthy.
// Since both are truthy, && returns the last truthy value → " hii".
console.log(result)

result = 0 && 19 //0 
console.log(result)
// 0 is falsy.
// Since && returns the first falsy value, the evaluation stops at 0 and doesn't check 19.

result= 18 && "hello" //hello
console.log(result)
// 18 is truthy.
    // "hello" is also truthy.
    // Since both are truthy, && returns the last truthy value → "hello"

result = 17 && "how are you" || "nice to meet you..." // nice to meet you
console.log(result)
// 17 && "how are you"

// 17 is truthy.
// "how are you" is also truthy.
// Since both are truthy, && returns the last truthy value → "how are you".
// "how are you" || "nice to meet you..."

// "how are you" is truthy, so OR (||) returns the first truthy value without checking "nice to meet you...".

result = 77 && 18 //18
console.log(result)
// 77 is truthy.
// 18 is truthy.
// Since both are truthy, && returns the last truthy value → 18.

//not operator
const oddnumber=20
if(!(oddnumber % 2==0))
    console.log(oddnumber)

console.log("*!!!!!!!!!! PRINTING EVEN-ODD NUMBERS !!!!!!!!!!!!*")
let num = 40;
if(num % 2 == 0){
    console.log(num + " : " + " is even number" )
} else{
    console.log(num +" : "+  " is odd number")
}