// 39. Hoisting in JavaScript

// Interview question & useful in debugging

/*
Hositing in JS is a behavior in which a function or a variable can be used before declaration.


Types Of Hoisting :

 # Variable Hoisting : 
 - > Only variable declared with var is hoisted (not let and const variable)

 # Function Hoisting :
 - > Simple functions is hoisted (not function expressions)



*/

//Ex. In this example JS interpreter reads function definition before executing code

console.log("Addition using hoisting is "+Add(9,5));
function Add(a,b)
{
	return (a+b);
}


// Ex.2
// let Add = function(a,b)
// {
// 	return (a+b);
// }
// // Error


// Ex. 3   try to hoisting  using function  expression
// Add();
// var Add = function()
// {
// 	 console.log("Hello var");
// }
// Output : Error

