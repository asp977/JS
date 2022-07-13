/*

58.Iterables&Iterators.js

Javascript ES6 — Iterables and Iterators

# Iterables
> Iterable objects are objects that can be iterated over with for..of loop.

> In JS ,iterable is a interface that specifies that an object can be accessible if it implements a method who is key is [symbol.iterator].

> Some of the built-in data structure that use iterable are :
Arrays
Strings
Maps
Sets etc.

> Why iterable were added in ES6?
   ES6 has introduced new data structures like sets and maps so it will become more complicated to write logic as per data structure for iterations.
   This is where the iterable interface was born.

*/

// string & array are interable
// object is not iterable

// Iterating over a string
let FirstName = 'asp';
for(const ele of FirstName)
{
	console.log(ele);
}

console.log();

// Iterating over a array
let Items = ['item1' ,'item2' ,'item3'];
for(const items of Items)
{
	console.log(items);
}

console.log();

//Note : We can create own iterables later....



/*

# array like object 
> Array: 
    Array is an indexed collection that can hold data of any type. They are created with [ ]. 
    Example: 
    let arr = [1, 2, 'capscode', true, null, ,12];

> Object: 
    Object are the Keyed Collection that hold the properties in key: value pair. They are created with { }. 
    Example:
    let person = 
    {
     first_name : "John",
     last_name : "Doe",
     company : "capscode",
     };


> What array like object ??
   An object is an array-like if it satisfies the criteria listed below :
   a) The index should start at 0
   b) The index should be incremented in the same way as that of an array
   c) It should have a length property and returns a non-negative integer
   d) Its value should be equal to the number of integer-index keys.
   ex.array ,string 

*/

  let arr = [1, 2, '@asp_977', true, null, ,12];
  console.log("arr : ",arr);
  console.log(`Array Length is ${arr.length}`)
  console.log(`Accessing index 2 value of array is ${arr[2]}`);
