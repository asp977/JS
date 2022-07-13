/*
61.ObjectAssign() Method.js

> The JavaScript Object.assign() method copies all enumerable own properties of given objects to a single object and returns it.


> syntax : Object.assign(target, ...sources)
   assign() Parameters
    target - The target object — what to apply the sources' properties to, which is returned after it is modified.
    sources - The source object(s) — objects containing the properties you want to apply.

> Note: Properties in the target object are overwritten by properties in the sources if they have the same key.


*/

//Using Object.assign() to clone & merge objects

const Box1 = 
{
	Height : 200,
	Weight : 300,
	Color : 'Blue'
}
//const Box2 = Box1; 
//Box1.Code = 'REFG029'; // if we run this line then Code key added in both Objects Box1 & Box2
//const Box2 = {...Box1, Code : 'REFG029'}; // using spread operator we add keys in only selected Objects

const Box2 = Object.assign({} , Box1);
Box2.Code = 'REWD234';
console.log('Box1', Box1);
console.log('Box2', Box2);



// Explain More about Object.assign in OOP concept later on....