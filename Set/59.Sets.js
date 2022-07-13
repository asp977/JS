/*

59.Sets.js

>  Set object provided by ES6.

>syntax :
   let setObject = new Set();

> Set is similar to an array that allows us to store multiple items like numbers, strings, objects, etc.

> Set contain only unique values  (no duplicate values allowed)

> No index based access in Set //undefined

>  Set order is not fixed

> In Set we can add  multiple types of value.

> Sets are iterables
*/

//Create a Set  (empty Set)

let  SetObj = new Set();  // 'Set' keyword has 1st letter  is always capital

//You can access Set elements using the values() method
console.log(SetObj);

console.log();


// Set with duplicate values
const set = new Set([1,"a" ,3,"a",4,5,5,6,6])
console.log("No Duplicate Allowed :",set);

console.log();
// Set with multiple types of value
let  SetOb = new Set([2,3,'Hello',5,{Name: 'asp'}]);  

//You can access Set elements using the values() method
console.log(SetOb.values());
console.log(SetOb);


//You can use the has() method to check if the element is in a Set. For example,
let ItemsOfSet = new  Set(['item1' ,'item2' ,{Name: 'item3'}]);
function SetHas(Input)
{
	if(SetOb.has(Input))
	{
		console.log(Input,"element is present ");
	}
	else
	{
		console.log(Input,"element is not present");
	}
}
SetHas(8);

console.log();


// you can add elements to a Set using the add() method. For example,
ItemsOfSet.add(1);
ItemsOfSet.add(true);
ItemsOfSet.add(3);
console.log(ItemsOfSet);

console.log();


//Iterate Set
for(let ele of ItemsOfSet)
{
	console.log(ele);
}

console.log();

//You can use the clear() and the delete() method to remove elements from a Set.

//The delete() method removes a specific element from a Set. For Ex,
console.log("Before Deleting Element :",SetOb);
// removing a particular element
SetOb.delete('Hello');
console.log("After Deleting Element :",SetOb);

console.log();

//The clear() method removes all elements from a Set. For Ex,
console.log("Before Clearing  :",SetOb);
// remove all elements of Set
SetOb.clear();
console.log("After Clearing  :",SetOb);

