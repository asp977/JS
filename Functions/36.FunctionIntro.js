
/*

36. Function Into :

A  function is a black of code that performs a specific  task.
A function  is declared using the function keyword .
For example, if a function is used to add two numbers, you could name the function add or addNumbers.

The body of function is written within '{ }'.



syntax :

function NameOfFunction()
{
	//function body
}
function_name();




*/

//Function Declartion

// 1.creating function
function  MyName()
{
	console.log('My Name is asp977.');
}
// calling function
 MyName( ) ;

console.log("");
/*

Function with parameters :

> A function can also declared parameters .
> A parameter is a value that is passed when declaring a function.

> Syntax :

function NameOfFunction(Parameter1,Parameter2,...)
{
	//function body
}
function_name(arg1,arg2...);

> Note: 
When a value is passed when declaring a function, it is called parameter. And when the function is called, the value passed is called argument.

> JavaScript function doesn't specify datatypes for parameters

> avaSript functions do not perform type checking on the passed arguments 

> JavaSript functions do not check the number of  arguments recevied



*/

function Display(name)
{
	console.log(name);
}

Display("Eren Yeager");

function Add(Num1, Num2)
{
	console.log(`Addition of ${Num1} & ${Num2} is`,Num1 +Num2);
}
Add(50,50.63);

console.log("");


/*

 return statement :

 The return statement can be used to  return the value to the function call. 

 The return statement denotes that the function ha ended any code after return is not executed means stopped.

 if nothing is returned the fuction returns an ''undefined'' value.

 Fuction can return :
- Primitive types (String ,number,boolean,etc..)
- Object types (array,objects,functions,etc..) 

 syntax :
 return(expression);

 Note :Try to always use parentheses when returning something on multiple lines otherwise result will be undefined

*/


function  ReturnVal(a,b)

{
	return (a + b);

}
let c = ReturnVal(29 ,1);
console.log("Addition of a & b with return statement is",c)

console.log("");

//Ex Create function name as IsEven and if input number is Even then return true otherwise false.

function IsEven(num)
{
	if (num %2 === 0)
	{
		return (true);
	}
	//return false;
	else
	{
		return (false);
	}
}
const input = IsEven(2);
console.log("Input is",input);


console.log("");

// Ex. take input as string and print firstcharacter of string using return statement.

function FirstChar(MyString)
{
	return (MyString[0]);

}
console.log("firstcharacter is",FirstChar("asp"));

console.log("");

// Ex. take input as array & target number and if target present in array so print index of target number using return statement.

function FindTarget(array, target)
{
	for(let i = 0; i<=array.length; i++)
	{
		if(array[i] === target)
		{
			return i;
		}
	}
	return "Target Index Not Found !";
}

let MyArray = [2,1,32,11];
let Ans =FindTarget(MyArray, 0);
console.log("Target Number at "+ Ans + " position");