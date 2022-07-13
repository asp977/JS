/*
SCOPE :
-> Scope is the way of accessing variable,functions and objects in some particular part of your code during runtime.
                                            or 
-> Scope determines the accessibility of variables, objects, and functions from different parts of the code.

-> For create Scope we need to create function .

there  of scope :
# Block scope
# Global scope 
# Local Scope 
# Function Scope

1.Block Scope :
-> Before ES6 (2015) ,javascript had only Global and Function Scope
-> ES6 introduced 2 new important new Javascript keyword let and const.
-> let & const  keywords provide Block Scope in JavaScript.
-> Using those 2 keyword variable declared inside a { }  block cannot be accessed from outside the block 
-> let & const keyword  variable you can't accesses outside the block but var keyword access outside the block

2.Global Scope :
-> Variable define outside of the function are in the global scope
-> Once you've declared a global variable,you can use that variable anywhere in your code, even in function 

3.Local Scope : 
-> Variable define inside of the function are in the local scope,
-> The variable is only allowed within that function
-> Local variables are created when a function starts, and deleted when the function is completed.
-> Local variables have Function Scope:
-> Each function when invoked creates a new scope,so there is a function scope.

4. Function Scope :
-. Function scope can only be accessed from within the function.
-> JavaScript has function scope: Each function creates a new scope.
-> Variables defined inside a function are not accessible (visible) from outside the function.
-> Variables declared with var, let and const are quite similar when declared inside a function.


SCOPE CHAIN :

-> The scpoe chain is used to resolve the value of variable in javascript,which means it will help you to identify which variable has which value 



41.Lexical Scope in JavaScript

Lexical Scoping/Static Scoping :
-> A function that is lexically within another function get access to the scpoe of the outer function

-> In simple words, Inner function can get access to their parent functions variables but the vice-versa is not ture.



*/

// Ex of  Lexical Scope
const MyVar = "Value 1";
function MyApp()
{
	const ParentVar = "Parent_Variable";
	function MyFun() 
	{
		//const MyVar = " Value 2";
		const InnerFun = () =>
		 {
		 	console.log("inside InnerFun ParentVar :",ParentVar);
		 	console.log("inside InnerFun MyVar :",MyVar);
		 }
		InnerFun();		
	}
	MyFun();
}
MyApp();


