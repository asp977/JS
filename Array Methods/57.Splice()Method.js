/*

57.Splice()Method.js

> The splice() method returns an array by changing (adding/removing) its elements in place.

 > Returns an array containing the deleted elements.

> Syntax
  arr.splice(start, deleteCount, item1, ..., itemN)

  - start - The index from where the array is changed.
  - deleteCount (optional) - The number of items to remove from start.
  - item1, ..., itemN (optional) - The elements to add to the start index. If not specified, splice() will only remove elements from the array.
 

> Note:  The splice() method changes the original array.


*/

//Delete the items with start and deleteCount using Splice() method
const myArray = ['item1' ,'item2', 'item3','item4'];
const DeletedItem = myArray.splice(1,2);
console.log(' Return Deleted Item :' ,DeletedItem)
console.log("Remaining Items after deleted items :",myArray);


console.log();

// Insert
const Arr = ['i1' ,'i2', 'i3','i4'];
Arr.splice(4,0,'i5') 
// value insert at 4 index and 0 means nothing to delete array
console.log(Arr);

console.log();
