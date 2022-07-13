//while loop

//loops are used to repeat a block of code
console.log("Print 1 to 10");
let a=1;
while(a<=10)
{
	console.log(a);
	a=a+1; // or a++;
}

console.log(" ");
console.log("Print reverse 10 to 1");
let a1=10;
while(a1>=1)
{
	console.log(a1);
	a1=a1-1; // or a++;
}

console.log(" ");
console.log("Ex.of while loop sum of the natural number !");
let total=0; //1.0+1 2.1+2 3.3+3...
let i=0;
while(i<=10)
{
	total=total+i;   
	i=i+1; //i++	
}
console.log(total);


// (num*(num +1))//2)