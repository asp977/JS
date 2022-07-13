/*
53.Find()Method.js

> The find() method returns the value of the first array element that satisfies the provided test function.

> Returns the value of the first element in the array that satisfies the given function.

> Returns undefined if none of the elements satisfy the function

> syntax ;
arr.find(callback(element, index, arr),thisArg)
  find() Parameters
- callback - Function to execute on each element of the array. 
   It takes in:
    - element - The current element of array.
    - index 
    - arr
- thisArg (optional) - Object to use as this inside callback.


*/

// Ex.1 Find the string that have length is equal to 3.

const Strings = ['OnePiece' ,'Zoro', 'Naruto', "BlackCover",'cat',"Re:Zero"];
function GreaterLength(string)
{
	return string.length ===3 ;
}
const FindLength =  Strings.find(GreaterLength);
console.log(FindLength);


// Ex. 2 Find the Adult member for the elements
const  Group = 
[
{Name : "Luffy" ,Age: 18},
{Name : "Raju" ,Age: 15},
{Name : "Goku" ,Age: 20},
{Name : "Zoro" ,Age: 32},
{Name : "Bheem" ,Age : 9},
];

// function IsAdult(member)
// {
// 	return member.Age >18;
// }
// console.log(Group.find(IsAdult));

// Using Arrow Function
const AM = Group.find((member) => member.Age >=18);
console.log(AM);


