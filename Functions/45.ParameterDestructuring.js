/*

45.ParameterDestructuring.js

-> parameter destructuring use with object.
-> use in react .



*/

const Person = 
{
	FirstName :"ASP",
	Age:20,
}

// function PrintDetails(Obj)
// {
// 	console.log("First Name :",Obj.FirstName);
// 	console.log("Age :",Obj.Age);
// }


function PrintDetails(FirstName, Age)
{
	console.log(FirstName);
	// console.log(Age);
}

PrintDetails(Person);

