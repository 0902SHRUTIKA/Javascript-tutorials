// function getUserInput() {
//     var input = document.getElementById('userInput').value;
//     alert("You entered: " + input);
// }

function sayHiiFunction() {
    console.log("Hii function");
}
sayHiiFunction()

console.log("******** ARITHMETIC OPERATION USING FUNCTION **********")
function add(a,b){
    console.log("Addition of two number is: ", a+b)
}
function sub(a,b){
    console.log("Subtraction of two number is: ", a-b)
}
function mul(a,b){
    console.log("Multiplication of two number is: ", a*b)
}
function div(a,b){
    console.log("Division of two number is: ", a/b)
}
add(30, 10)
sub(82,70)
mul(167,19)    
div(100,6)

console.log("******** WAP TO PRINT SQUARE OF NUMBER USING FUNTION ********")
function square(a){
    return a*a;
}

let a = square(4)
console.log(" square is :",a)// finding square ... square is :4
console.log("square of "+ a + " is: ", square(a))//finding square of the number... output is given as squareroot of 4 is: 2

console.log("******FINDING SQUARE ROOT OF THE NUMBER *******")
function squareRoot(n){
    return Math.sqrt(n)
}
let n = 81
let ans = n ** 0.5
console.log("Squareroot is: ",ans)
console.log(Math.sqrt(121))
console.log(Math.sqrt(144))

console.log("********* PRIME NUMBERS USING FUNCTION ********")

function primeNumbers(pn){
    for(let i=  2; i <= pn; i++)
    {
        if(i%2==0){
            console.log(i + " : is not a prime numbers")
        }else{
            console.log(i+ " : is prime number")
        }
    }
    return pn
 }
primeNumbers(10)