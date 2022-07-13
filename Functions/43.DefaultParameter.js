/*
ES6 
43.Default Parameter in JS

-> The cocept of default parameter is a new feature introduced in the ES6 Version on JS.
-> This allows us to give default values to function parameters,expressions
-> if argument not declare while calling the funtion then we can set default parameter  while declaring the function.


// old method

function Cal(a,b)
{
	if (typeof b === "undefined")
	{
		b = 0;
	}
	return a+b;
}
const ans = Cal(20);
console.log(ans);


console.log();
*/

// new method
function Cal(x =3 ,y = 25)
{
	return x + y;
}
console.log(`Cal Function With arguments :${Cal(2,24)}`);
console.log(`Cal Function With Default Parameter :${Cal(2)}`);
console.log(`Cal Function With Default Parameter :${Cal()}`);


