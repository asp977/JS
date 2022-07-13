//38.ArrowFunction.js

/*

Arroe function is one of the feastures introduced in the  ES6 version of JavaScript.
It allow you to create function in a cleaner way way compared to regular functions.

Arrow function syntax :
  {statements(s)}

Here,
myFunction is the name of the function
para1,para2.. are the function parameters
statement(s) is the function body

If the body has single statement or expression, you can write arrow function as:

let FunctionName = (para1,para2,..) => expression

Note : If a function has only one argument, you can omit the parentheses

*/

//Function Expression ex.
let x = function(x ,y)
{
	return x * y
}
console.log(`Using Function Expression :`,x(2,3));

// Arrow function  ex.
let a = (x , y) =>  x * y ; //we are using expression here
console.log(`Using Arrow Function :`,a(2,3));


// Arrow function with no argument
let b = () =>  console.log('Hello') ; 
b();


// Arrow function with multiline
//Note :If a function has only one argument, you can omit the parentheses
const SumOfNum = (a,b,c) => { const Result = a+b+c; return Result}
let InputNum = SumOfNum(3,2,3);
console.log("Sum Of Number is "+InputNum);

//Note :If a function has only one argument, you can omit the parentheses
//Ex .
let Greet = x => console.log(x);
Greet("Good Morning");



