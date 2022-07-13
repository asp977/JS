// For loop 

// loops are used to repeat a block of code
//For example, if you want to show a message 100 times, then you can use a loop.
//syntax for 'for loop'

// for(initalization; condition; increament/decreament)
// {
// 	//for loop body
// }

console.log("Printing number 1 to 10");
// if we use var keyword then var is global variable accessble outside the for loop
// where let let variable can't accessble outside the for loop

let i=1;
for(;i<=10;i++) // for(let i=1;i<=10;i++)
{
	console.log(i);
}

console.log("");
console.log("Printing sum of the natural number from 1 to 10");

let t=0;
for(j=1;j<=10;j++)
{
	t=t+j;
}
console.log(t);


console.log("");
console.log("Finding Even & Odd number in JS");
for(let k=0;k<=10;k++)
{
	if(k%2==0)//->even      //(k%2===0) ->odd
	{
		console.log(k);
	}		
}