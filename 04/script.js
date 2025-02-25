console.log("Conditional statement");
let age = 55;
if(age >= 10)
    console.log("Congratulation!! You are eligible for voting...")
else{
    console.log("You are  not eligible for voting...")
}
console.log("****** NESTED IF STATEMENT(if- else if- else) *******")

const age1 = 100;
 if(age1 <= 20)
{
    console.log("you are not teenage")
}
if(age1 == 5)
    {
        console.log("you are teenage....")
    }
    
else{
console.log("You are adult")
}

console.log("******* TERNARY OPERATOR *********")
age1 <= 100 ? console.log('true'):console.log('false')
age1 >=20 ? console.log(0) : console.log(1)

console.log("******* SWITCH CASE STATEMENT ******")
const options =  5;
switch(options){
    case 1:console.log("Hello")
    break;
    case 2: console.log("hii")
    break;
    case 3: console.log("helo")
    break;
    case 5: console.log('hey!! nice to meet you...')
}

let a = 10;
let b = 2;
let op = "/";
switch(op){
    case "+" :console.log(a + b)
    break;
    case "-" : console.log(a - b)
    break;
    case "/" : console.log(a / b)
    break;
    case "*" : console.log(a * b)
    break;
    default:
        console.log('invalid operations')
}