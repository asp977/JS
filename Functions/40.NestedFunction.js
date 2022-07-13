//40.NestedFunction.js

function App()
{
	const  GitUser = (Username) =>
	{
		console.log("  ->Github Username :"+ Username );
	}

	const TwitterUser = (Username) => 
	{
		console.log("  ->Twitter Username :" + Username);
	}

	function Calculator()
	{
		
	   	 const Multi =(num1 , num2)=> 
	   	 {
	   	 	return num1 * num2;
	   	 }
	   	 
	 console.log("   Inside Calculator Function ! ");
	 console.log("     ->Inside the Calculator Function Multi Function is",Multi(5,5));
	  
	}   	 
	
     console.log("Inside App Function !");
	 GitUser("@asp_977");
	 TwitterUser("@asp_977");
     Calculator();
	
}

App();