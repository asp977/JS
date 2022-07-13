/*
37. Function Expressions

In JS, there are two ways to create function, We know  about function declarion and  anothr syntax for  creating a function that is called Function Expresssion.



//Function Declartion

// 1.creating function
function  MyName()
{
	console.log('My Name is asp977.');
}
// calling function
 MyName( ) ;

console.log("");
// Function Expressions
syntax :
let variableName = functionKeyWord()
{
	//function body
}
VariableName()

*/

//Ex 1 :
const a = function()
{
	console.log("ASP")
}
a();

console.log("");

//Ex 2 :
const b = function (Num1, Num2)
{
	console.log(`Addition of ${Num1} & ${Num2} is`,Num1 +Num2);
}
console.log( b(10,50));


console.log("");

// Ex 3
let c = function(MyString)
{
	return (MyString[0]);
}

const ansC = c("aspx")
console.log("firstcharacter is",ansC);

console.log("");