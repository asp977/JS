/*

47.FunctionReturnFunction.js



*/

function MainFun()
{
	function InnerFun()
	{
		console.log(`Hello Inner Function `);
		return "Akash";
	}
	return InnerFun;
}

const Show = MainFun();
// Show(); //printing console statement of InnerFun

console.log(Show()); // printing return statement of InnerFun
 


// Here We Create Nested Function ans we  return InnerFun in MainFun 
// and for calling the function we create a Show variable then assign to MainFun Show varible work as Function 
// if you call Show function then InnerFun Function of MainFun is printed