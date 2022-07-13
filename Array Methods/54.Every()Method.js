/*

54.Every()Method.js

> Returns true if all array elements pass the given test function (callback returns a truthy value).
Otherwise, it returns false.

> syntax :
arr.every(callback(currentValue), thisArg)

every() Parameters
- callback - The function to test for each array element. It takes in:
   -currentValue - The current element being passed from the array.
  - thisArg (optional) - Value to use as this when executing callback. By default, it is undefined.

> every() does not change the original array.

> every() does not execute callback for array elements without values.

*/

let Nums = [1,2,3,4,5,6,7,8,9];
//let Nums = [2,4,6,8];
const Re = Nums.every((ele)=> ele%2==0);
console.log(Re);


console.log();


//Ex Every Product pirce has ProPrice is greater than 20000  //true
const UserCart = 
[
{ProductId:1,ProductName:"Mobile",ProPrice:22000},
{ProductId:2,ProductName:"Laptop",ProPrice:60000},
{ProductId:1,ProductName:"Tv",ProPrice:30000}
];

const PriceRe = UserCart.every((Price) => Price.ProPrice > 20000);
console.log(PriceRe);
