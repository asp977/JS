//42.Block Scope Vs Function Scope.js

/*
# What is the block? 
 -> A block is a set of opening and closing curly brackets.
 -> Use {} for block scope:
 - >It is used for printing single or multiple statementsand use with loop ,functions  etc...


#.Block Scope :
-> Before ES6 (2015) ,javascript had only Global and Function Scope.
-> ES6 introduced 2 new important new Javascript keyword let and const.
-> These 2 keywords provide Block Scope in JavaScript.
-> Variable declared inside a {}  block cannot be accessed from outside the block 
-> let  keyword  variable accesses only within the block but var keywor can access within the block & outside the block scope.


Ex Of Block Scope
 
 -> Use {} for block scope:

Note : -> let  keyword  variable accesses only within the block but var keywor can access  within the block & outside the block scope.


{
	var Num = 12;
	var Str = "asp";
}
console.log("'var' Variable Access within and outside of the block scope.");
console.log("var Variable : "+ Num);
console.log("var variable : "+ Str);
 
 console.log();
{
	let Num = 22;
	console.log("'let' Variable Access only within the block scope but not outside. ");
    console.log("var Variable : "+ Num);
}

console.log();


#. Function Scope :
-> var keyword is function scope you  can access anywhere and let & const access only within the function

//Ex 1 Function Scope :
if(true)
{
	 var FirstName = "ASP";
	 console.log(FirstName);
}
console.log(FirstName);
*/


// Ex.2 Here var variable access anywhere
function MyFunction()
{
	if(true)
	{
		 var FirstName = "ASP";
	     console.log(FirstName);
     }

     if(true)
     {
	     console.log(FirstName);
     }
    console.log(FirstName);
}
MyFunction();


/*
var is function scope.
let and const are block scope.

Function scope is within the function.
Block scope is within curly brackets.

*/