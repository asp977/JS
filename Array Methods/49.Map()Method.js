/*
ES6
49.Map()Method.js

-> map() method important for react 

- > The map() method create a new array with the results of calling function on every element in the calling array.

-> map calls a provided callback function once for each element in an array, in order and returns a new array from the ressults.

-> map() does not execute the function for empty elements.

-> map() does not change the original array.

-> The map() method is commonly used to apply some changes to the elements, whether multiplying by a specific number

syntax :
map(function(currentValue,index,array),thisArg);

Here , 
> thisArg : Optional.Default value undefined.A value passed to the function to be used as its this value.

*/

// creating map method

const OnePiece = ['Sanji' , 'Nami' ,'Luffy','Zoro' , 'Usopp' , 'Robin'];
const PrintChar = OnePiece.map(
	function(Char,index)
	{
		 return  Char ; 
		//return index + " : "+ Char ; 
		//return index + " : "+ Char + " : Straw Hat Crew"; 
	});
console.log("Original : ",OnePiece);
console.log( "Using map method :",PrintChar);

console.log();


const Users =
[
{Id: 1 ,FirstName : "Akash", Age : 20},
{ Id: 2 ,FirstName : 'Vivek', Age : 20},
{Id: 3 ,FirstName : "Raju", Age : 22},
{Id: 4 ,FirstName : 'Vikas', Age : 22}
]
//console.log(Users[2].FirstName);
const ProUsers = Users.map( (NewUsers) => 
	{
		return `My Id is ${NewUsers.Id} & My name is ${NewUsers.FirstName} & age is ${NewUsers.Age}`
	}
	);
console.log(ProUsers);

console.log();



const NumArr= [9,8,7,6];
// create function using function expression:
const Square = function(Num)
{
	return Num**2;
}
const  SquareNum = NumArr.map(Square);
 // map method always create new array
console.log(SquareNum);


console.log();


const NArr= [2,6,4];

const AddItSelf = NArr.map((NumFromArr,index) => 
{
	return `At index ${index} : ${   NumFromArr + NumFromArr}`});
console.log(AddItSelf)


