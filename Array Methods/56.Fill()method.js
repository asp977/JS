/*

56.Fill()method.js

> The fill() method returns an array by filling all elements with a specified value.

> Returns the modified array, filled with value from start to end.

> Syntax
 - arr.fill(value, start, end)
  > fill()  has 3 Parameters :   
   - value - Value to fill the array with.
   - start (optional) - Start index (default is 0).
   - end (optional) - End index (default is Array.length), which is always excluded.

> Notes:
   - If start or end is negative, indexes are counted backwards.
   - Since fill() is a mutator method, it changes the array itself (not a copy) and returns it.


*/

const Arr = new Array(10).fill(-2);
console.log(`Array(10).fill(-2) : ${Arr}`);

console.log();

const Arr1 = [1,2,3,4,5,6,7,8];
Arr1.fill(0,3,6,); 
console.log(`Arr1.fill(0,4,6,)  : ${Arr1}`);
