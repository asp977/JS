/*

54.Some()Method.js

> The some() method tests whether any of the array elements pass the given test function.

> Returns true if an array element passes the given test function (callback returns a truthy value).
Otherwise, it returns false.

> some() Syntax
   - arr.some(callback(currentValue), thisArg)

> Notes: 
The some() method does not:
- change the original array.
- execute callback for array elements without values.


*/

//Ex1. Check the weather ages are minor or not .

const Ages = [34, 23, 20, 26, 12];

//checks whether Ages contains any element that is less than 18
const Check = Ages.some((age) => age < 18 );
console.log(" Array Contain Minor Ages ?? : ",Check);
console.log();


const CheckOdd= [4, 8, 0, 6, 2];
const OddNumCheck = CheckOdd.some((OddNum) => { return OddNum%2!=0});
console.log(" Array  Contain Odd Number ??  :",OddNumCheck);