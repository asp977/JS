/*
52.Sort()Method.js

> The sort() method sorts the items of an array in a specific order (ascending or descending).

> syntax :
arr.sort(compareFunction)
      - compareFunction (optional) - 
      It is used to define a custom sort order.




*/

//Ex.1 
// Here in Ex1 Numbers are consider as string then sorted and use ASCII value

const Numbers = [456,73,876,1234,45]; 
                                //[52,55,56,49,52]
                                //[49,52,52,55,56]
                 //sorted [1234,45,456,73,876]
//const Numbers = [66,65,53,23,9];
                        //     [54, 54,53,50,57]
                       //     [6,6,5,2,9] ASCII 
        //sorted        [23,53,65,66,9]
console.log(`Before sort method : ${Numbers}`);
console.log(`After sort method : ${Numbers.sort()}`);

console.log();

//Ex 2
// Here in Ex2 Str varible consider a string and sorted based on ASCII value Ex. 'A' : 65 .... & 'a' : 97...etc
const Str = ['Python' , 'Java' , 'javascript','Rudy','R'];
console.log("Before sort method : ",Str);
console.log("After sort method : ",Str.sort());

console.log();



// Ex.3 sort() method with callback function
// Here we can use Arrow function also
const Num = [65,768,9,-2,53,23];
function SortedNum(a,b)
{
	return a-b;
}
const Result = Num.sort(SortedNum);
console.log('Before sort method using callback function :',Result);
console.log('After sort method callback function :',Result);

console.log();


//Ex 4 Price LowToHigh HighToLow
const Products = 
[
{ProId: 1 , ProName : 'Pro1' , ProPrice : 300},
{ProId: 2 , ProName : 'Pro2' , ProPrice : 220},
{ProId: 3 , ProName : 'Pro3' , ProPrice : 332},
{ProId: 4 , ProName : 'Pro3' , ProPrice : 875},
{ProId: 5 , ProName : 'Pro4' , ProPrice : 760},
];

function Low2High(a,b)
{
	return a.ProPrice - b.ProPrice;
}
const LowToHigh= Products.slice(0).sort(Low2High);
console.log(LowToHigh);


function High2Low(a,b)
{
	return b.ProPrice - b.ProPrice;
}
const HighToLow= Products.slice(0).sort(High2Low);
console.log(HighToLow);