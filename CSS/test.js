/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/



function largeNumber(num1,num2){
if (num1>num2) 
{
	console.log(num1);
}
else
{
	console.log(num2);
}
}
  
 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/

function signProduct(num){
if (num<0) 
{
	alert('The number is Negative');
}
else
{
	alert('The number is positive')
}


}

  
 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/

function largeThreeNumber(num1,num2,num3){
	var max = num1;
if (num2>max) 
{
	
	max = num2;
}
if (num3>max)
{
	max=num3;
	
}
alert(max);
}


 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/

function largesFiveNumbers(num1,num2,num3,num4,num5) {



	var max = num1;
	if (num2>max) 
	{
		max = num2;
	}
	if(num3>max)
	{
		max = num3;

	}
	if(num4>max)
	{
		max=num4;

	}
	if(num5>max)
	{
		max=num5;
	}
	return max;
	// body...
}












  
 /******* End Your Code ********* */

 /* 5.Fix the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/


function display(x,y) {
	if (x>y) 
	{
		console.log("Hello World");

	}
	else
	{
		alert('Goodbye');
	}
	// body...
}
  
 /******* End Your Code ********* */


/*write the if statement to display "Hello World" if x is greater than y.*/
/******* Start Your Code *********/
  
 /******* End Your Code ********* */





