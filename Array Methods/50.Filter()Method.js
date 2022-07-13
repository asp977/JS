/*
50.Filter()Method.js
> use in react
> ES5

 > Filter method returns a new array with all elments that pass the test defined by the given function.

> filter() does not change the original array.

> filter() does not excute callback for array elemnts without values.

> syntax :
array_name.filter(Function(element),thisArg)

filter() Parameters : 
> [callback] -
 The test function to execute on each array element; returns true if element passes the test, else false. It takes in:
> [element] -
 The current element being passed from the array.
> [thisArg (optional)] -
 The value to use as this when executing callback. By default, it is undefined.

*/


//Ex1. Here we are filtering ages are greater than or equal to 18 .

const  ages = [12,34,20,14,18,10,37,19];
console.log(`ages : ${ages}`);

function CheckAges(age)
{
	return age >=18;
}

const Result = ages.filter(CheckAges);
console.log(`Filter ages >=18 : ${Result}`)

console.log();

// Ex.2 

const Numbers = [1,2,3,4,5,6,7];
// const IsEven = function(Nums)
// {
// 	return Nums%2===0;
// }

// const Ans = Numbers.filter(IsEven);
const Ans = Numbers.filter((Nums) => {return Nums%2==0})
console.log(`Numbers : [${Numbers}] `);
console.log(`Filtert Even Numbers : [${Ans}]`);
