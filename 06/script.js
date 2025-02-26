console.log(" ****** USING FORLOOP *******")
for( let i = 0; i <= 20; i = i + 1){
    console.log(i+'. ' + "Shrutika")
}

console.log("***** EVEN NUMBERS ********")
for(let i = 2 ; i <= 30; i++){
if(i % 2 == 0){
        console.log(i)
}
}

console.log("!!!!!!!!  WHILE LOOP !!!!!!!!!!!")
var counter = 2
while(counter != 20){
console.log(counter)
counter++
}
 
let n = 1
while(n <= 10){
    console.log(n)
    n++
}

console.log("******************************")
let house = 0
let office = 100
while(house != office){
    house = house + 1;
console.log(house + " : "+" taken steps from house to office")
}

console.log("!!!!!!!!!!!!!! do while{} loop !!!!!!!!!!!")
let ip = 0 // initial position is used as ip  used to show house
let off = 50 //distance of office is 200
do{
ip = ip + 1
console.log(ip)

}while(ip < off)


console.log("<<<<<<<<<<<<< NUMBER GUESSING >>>>>>>>>>>>")
let num = 10
let guess;
do{
 guess = parseInt(prompt("Guess the number")) // parseInt is used to convert the string into integer/number
//  instructs the browser to display a dialog with an optional
//  message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.
 if(guess === num){
    alert("WINNER")
    break;
 }else if(guess === 0)
    {
    alert("LOOSER")
 }
 
}while(true)
// // break;A 'break' statement can only be used within an enclosing iteration or switch statement.

// let num = 10;
// let guess = 0;
// let isWinner = false; // Flag to check if the user won

// do {
//     guess = parseInt(prompt("Guess the number (or enter 0 to quit):"));
    
//     if (guess === num) {
//         alert("WINNER");
//         isWinner = true; // Set the flag to true if the user wins
//         break; // Exit the loop if the guess is correct
//     }
    
//     if (guess !== 0) { // Only show the loser message if they didn't quit
//         alert("Try again!");
//     }
// } while (guess !== 0); // Loop until the guess is 0

// if (!isWinner) {
//     alert("LOOSER");
// }
