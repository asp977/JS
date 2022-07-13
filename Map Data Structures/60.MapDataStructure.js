/*
60.MapDataStructure.js

> The JavaScript ES6 has introduced new data structure Map.

> Map similar to objects in JavaScript that allowas us to store elements in a key/value pair.

> map is an iterable 

> Maps can contain objects and other data types as keys.

> The elements in a Map are inserted in an insertion order. However, unlike an object, a map can contain objects, functions and other data types as key/pair.

> To create a Map, we use the new Map() constructor
>syntax :
   let map = new Map();


*/


//Creating a empty Map 
const Person = new Map();
console.log(Person);


//inserting  a key/pair value
//After you create a map, you can use the set() method to insert elements to it. For Ex.
const map = new Map();
map.set('Name' , 'asp_977');
map.set( 'Age' , 20);
map.set(1,"one") 
console.log(map);
//console.log(map.keys());

console.log();


let  map1 = new Map();

map1.set([1,2,3] , "OTT" );
map1.set('Name' ,'aspxstudio');
map1.set('year' ,2022);
console.log(map1);

console.log();
//Access Map Elements
//You can access Map elements using the get() method. For example
console.log(map.get('Name'));
console.log(map.get('Age'));
console.log(map.get(1));
//Check Map Elements
//You can use the has() method to check if the element is in a Map. For Ex,
//console.log(map.Keys());

console.log();

//Iterate Through a Map

//You can iterate through the Map elements using the for...of loop or forEach() method. 
//The elements are accessed in the insertion order. For example,

//for of looping through the Map
for (let [key,value] of map1) 
{
  console.log(key ,":", value);
}

console.log();

// map using forEach method() with arrow function
map1.forEach((k , v) => {console.log(k+ " : "+v );});

console.log();

//Iterate Over Map Keys
//You can iterate over the Map and g et the key using the keys() method. 
for(let key of map1.keys())   
{
	//console.log(key, "--->", typeof key);
	console.log(key);
}

console.log();

//Iterate Over Map Values
//You can iterate over the Map and get the values using the values() method. 
for(let value of map1.values())   
{
	//console.log(value , "--->", typeof value);
	console.log(value);	
}

console.log();

//JavaScript Map Size
//You can get the number of elements in a Map using the size property. For example,
console.log("map1 size is ",map1.size);

console.log();


const Fruits = new Map([['Apples',100] , ['Graphs',60],['Banana',30]]);
console.log(Fruits);







/*



JavaScript Map vs Object
                                    Map	                                                                                                                                                      Object
1. Maps can contain objects and other data types as keys.	                                              1. Objects can only contain strings and symbols as keys.
2. Maps can be directly iterated and their value can be accessed.                          	      2. Objects can be iterated by accessing its keys.
3. The number of elements of a Map can be determined by size property.	                  3. The number of elements of an object needs to be determined manually.
4. Map performs better for programs that require the addition or removal 	              4. Object does not perform well if the program requires the addition or removal 
    of elements frequently.                                                                                                                of elements frequently. 




    */
