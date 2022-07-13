// if we need to make choice between more than two conditions then we can used 'if else if else' statement
// Syntax : 
// if (condition1) {
//     // code block 1
// } else if (condition2){
//     // code block 2
// } else {
//     // code block 3
// }


//logic
// If condition1 evaluates to true, the code block 1 is executed.
// If condition1 evaluates to false, then condition2 is evaluated.
// If the condition2 is true, the code block 2 is executed.
// If the condition2 is false, the code block 3 is executed.

// let n=0;
// //let n= +window.prompt("Enter number :");
// if(n>0)
// {
// 	console.log("Number is positive !");
// }
// else if(n===0)
// {
// 	console.log("Number is 0");
// }
// else
// {
// 	console.log("Number is nagative");
// }
// console.log("if else if statement end")


let Tem=29;

if(Tem>=40)
{
	console.log("Too Hot !!");
}else if(Tem>=30)
{
	console.log("let's go for swim !");
}else if(Tem>=20)
{
	console.log("Weather is cool !");
}else if(Tem>=10)
{
	console.log("it is cold outside !");
}
else
{
	console.log("Extremely cold !!");
}