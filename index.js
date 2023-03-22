/* 
function divide (){
    return 2000/100;   This is a function declaration 
}
*/

//Declare a function expression
const divide = function (){
    return 2000/100;
}

//Arrow function with a single parameter
const square = multiply => multiply*multiply;

//Arrow function that takes 2 parameters
const add = (num1,num2) => num1 + num2;