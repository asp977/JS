/*
Important array methods

1.forEach loop
2.map() // use in react
3.filter()
4 .reduce()
- - - - - - -  - - - - - - - - - - - - - - - - - - - - - - -


48.ForEachLoop.js


->The forEach() menthod calls a function once for each element in an array,in order.

-> This method works as a loop an array where for every element the function just runs once only

-> This method useful as a purpose of reducing the syntax of for loop, but this doesn't return anythig in its output.

-> syntax :
Arr.forEach(FunName(currentValue,[index],[array]),[ thisArg])
     > currentValue : Required,The value of the current element
     > index : Optional , The array index of the current element
     > Arr : Optinal, The array object the current element belongs to 

*/


const Arr = [3,5,7,8,2];
function IndexMulti(NumberFromArr, index)
{
	//console.log(`Index is ${index}`);
	//console.log(`${NumberFromArr} * 2 = ${NumberFromArr * 2} `);
	console.log(`Index is ${index} and Index Number is ${NumberFromArr}`);
}
// IndexMulti(Arr[0],0);
//IndexMulti(Arr[0],0);
// for (let i = 0; i<Arr.length; i++)
// {
// 	IndexMulti(Arr[i],i);
// }

Arr.forEach(IndexMulti); // using for Each loop



console.log();

function ShowLoop()
{
	Arr.forEach(
		function(Nums,index)
		{
			console.log(`index[${index}] : ${Nums}`);
		}
	)
}
ShowLoop();


console.log();


const Language = ['Python','Java','JavaScript','PHP','C++','Ruby'];
Language.forEach(
	function(Language,index)
	{
		console.log(`${index}: ${Language}`);
	}
)



console.log();

// Create One Array  For Each element in the element in the array Add the value 100 to each items and update the element value
const Arrr = [1,2,3,4,5];
Arrr.forEach(
	function(Arrr,index,arr)
	{
		console.log(arr[index]+100);
	})

console.log();

console.log("Accessing Array Object using forEach loop & Arrow Function :")
const users =
[
{FirstName : "Akash", Age : 20},
{FirstName : 'Vivek', Age : 21},
{FirstName : "Raju", Age : 22},
{FirstName : 'Vikas', Age : 22}
]
 users.forEach(function(users)
 	{
		console.log(users.FirstName);
 	}
 	);

 users.forEach(
 	(users) =>
 	{
 		console.log(`{ FirstName :${users.FirstName} , Age :${users.Age } }`);
    }	
 	);

