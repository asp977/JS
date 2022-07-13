/*
JavaScript Asynchronous : Callback function

46.CallbackFunction.js 


-> Function that is passed as an argument inside of another function is called a callback function. 


*/

function Show(name)
{
	console.log("  ->Welcome To Show Function ! , "+name)
}

// callback function 
function CallMe(CallbackShow)
{
	console.log('This is CallMe function ! ');
	CallbackShow('asp'); 
}

//passing function as an argument.
CallMe(Show);



// ...callback function later cover in  Asynchronous javascript