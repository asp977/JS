// Logical Operators !!

// 1.AND operator denoted by '&&'.
// '&&' opeartor compaire 2 or more conditions at a same time .
// if both true then operands are true ,else returns false
console.log("======== [ AND Operator ] ==========");

let FirstName="Akash" , Age=20;
if(FirstName[4]==="h" && Age>18)
{
	console.log("Your name end with 'h' and age is above 18 .");
}
else
{
	console.log("Your condition is wrong !!");
}

console.log("");

console.log("======== [ OR Operator ] ==========");

// 2.OR operator

// 1.OR operator denoted by '||'.
//either both or any 1 operands are true then true returns false if both are false 
let f_name="asp",a=20;
if(f_name[4]==="h" || a>=19)
{
	console.log("inside if"); // any 1 condition true 
}
else
{
	console.log("inside else");
}


console.log("");

console.log("======== [ OR Operator ] ==========");

// 3.NOT operator  
// denoted by '!='
//if the both operand is false and vice versa.
