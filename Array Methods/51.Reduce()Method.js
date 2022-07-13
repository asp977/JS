
/*
51.Reduce()Method.js
> Interview Question 

> The reduce() method excutes a reducer function(that you provide) on each element of the array and return in single output value

> reduce() executes the given function for each value from left to right.

syntax :
arr.reduce(callback(accumulator, currentValue), initialValue)

reduce() Parameters :
> callback - The function to execute on each array element (except the first element if no initialValue is provided). It takes 
> accumulator - It accumulates the callback's return values.
> currentValue - The current element being passed from the array.
> initialValue (optional) - A value that will be passed to callback() on first call. If not provided, the first element acts as the accumulator on the first call and callback() won't execute on it.

Note : 
>Calling reduce() on an empty array without initialValue will throw TypeError.
> reduce() does not change the original array.
>It is almost always safer to provide initialValue.

*/

//Ex.1 :
let  Arr = [8,2,3,4,5,6];
let Sum = Arr.reduce((accumulator,currentValue) => { return accumulator + currentValue });
// let Sum = Arr.reduce((accumulator,currentValue) => { return accumulator + currentValue },100);
// Here we take intial value
console.log(`sum : ${Sum}`);

/*

accumulator     currentValue        return 
     8                        2                        10
     10                      3                        13
     13                      4                        17
     17                      5                        22
     22                      6                        28

*/

//Ex.2 :

const UserCart = 
[
{ProductId:1,ProductName:"Mobile",Price:20000},
{ProductId:2,ProductName:"Laptop",Price:60000},
{ProductId:1,ProductName:"Tv",Price:30000}
];

const TotalAmount = UserCart.reduce(
	(TotalPrice,CurrentProduct) =>{return TotalPrice + CurrentProduct.Price;},
      0);
console.log(`Total Amount Of User Cart is ${TotalAmount}`);


/*

TotalPrice            CurrentValue              Return 
      0                               { }                         20000  
  20000                     60000                      80000
  80000                     30000                      110000                                                      
                                                  
                                                  
                                                
                                                  

*/