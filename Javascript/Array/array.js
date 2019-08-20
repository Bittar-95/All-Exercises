console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]
 ["Str" "alex","moh"
 'the','fox' 'over' lazy, 'dog',  ]


 Correct the syntax error
 [ 1,7 , 9 , 45 ]
 ["Str" ,"alex","moh"
 ['the','fox', 'over', 'lazy', 'dog' ]
*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

"Tomato"=>0
"Banana" => 1
*/


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

var Food=['Mansaf','Maqloba','Kabsa','Nodel','Egg'];
var Sport=['football','Basketball','Rackets'];
var movie=['Dumb And Dumber','Rush Hour','Mission Imposible','The Hunger Game']


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

function firstOfArray(array) {
	return array[0];
	// body...
}
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array
Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

function lastOfArray(array) {

	// body...
	return array[array.length - 1];
}
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)
var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9];

array.pop();
array.push(8);
array.push(9);
array.push(10);
array.shift();
array.shift();
array.shift();
array.unshift(1,3,4,6);
console.log(array);



/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you
var array2 = [5,9,-7,3.5]
*/
var array2 = [25,9,-7,3.5];



console.log(array2.shift());
console.log(array2.pop());
console.log(array2.push(12));
console.log(array2.unshift(4));



/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets
Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(array) {
	let size = array.length ;
	
	if(size%2===0)
	{
		return array[size / 2 - 1] + ' ' +array[size / 2] ;
	}

	else
	{
		return array[(size-1) / 2 ];


	}
	
}

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something
var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

var animals = ['cat', 'ele', 'bird'];
var nums= [1,2,3,8,9];
animals[animals.length] = 'zebra';
animals[animals.length] = 'elephant';
nums[0] = 5;
nums[1] = -22;
nums[3] = 5;
nums[4] = 44;
nums[5] = 98;
nums[6] = 44;



/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index
var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9
**try more cases by your self
*/
function indexOfArray(num , index) {

	return num[index];
}

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]
**try more cases by your self
*/

function arrayExceptLast(array) {
	let result='';
	for (var i = 0; i < array.length-1; i++) {
		result+=array[i] + ' ';
		
	}
	return result;
	// body...
}

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array
var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]
**try more cases by your self
*/
function addToEnd(array,num) {
	array [array.length - 1] = num;
	return array;

	// body...
}

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array
var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function sumArray(array) {
	let total = 0;
		for (var i = 0; i < array.length; i++) {
		total+=array[i];
		
	}
	return total;
	// body...
}


function sumArray1(array) {
	let total = 0;
	let i = 0;

	while(i<array.length)
	{
		total += array[i];
		i++;

	}
	
	return total;
	// body...
}






/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array
var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(array) {
	let min = array[0];
	for (var i = 1; i < array.length; i++) {
		if (array[i]<min) 
		{
			min = array[i];
		}


		
}
return min;
}



function minInArray1(array) {
	let min1 = array[0];
	let i = 1;
	while(i<array.length)
	{
		if (array[i]<min1) 
		{
			min1 = array[i];
		}
		i++;

	}
	
		return min1;
}

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it
var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function removeFromArray(array,elemnt) {

	for (var i = 0; i < array.length; i++) {

		if (array[i] === elemnt) 
		{
			array.splice(i,1);
			i=-1;

		}
		
	}
	return array;
	
	// body...
}

function removeFromArray1(array,elemnt) {
	let i =0;

	while(i<array.length){

		if (array[i] === elemnt) 
		{
			array.splice(i,1);
			
			i=-1;
		}
		i++;
		
	}
	return array;
	
	// body...
}


/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts
var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(array) {

	let result= [];
	for (var i = 0; i < array.length; i++) {
		if (array[i]%2!== 0) 
		{
			result.push(array[i]);
		}
		
		

	}
	return result;
}



function oddArray1(array) {

	let result= [];
	let i =0;
	while(i<array.length)
	{
		if (array[i]%2!==0) 
		{
			result.push(array[i])
		}
		i++;

	}

	return result;
}

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array
var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6
var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray(array) {
	let total = 0;
	for (var i = 0; i < array.length; i++) {
		total+=array[i];
		
	}

	return (total/array.length).toFixed(1);
	// body...
}



function aveArray1(array) {
	let total = 0;
	let i=0;
	while(i<array.length)
	{
		total+=array[i];
		i++;

	}

	return (total/array.length).toFixed(1);
	// body...
}


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"
** solve it one time using for loop and another using while loop
**try more cases by your self
*/


function shorterInArray (array) {
	let min = array[0];
	for (var i = 1; i < array.length; i++) {
		if (array[i].length<min.length)
		 {
		 	min=array[i];
		 }
		
	}
	return min;
}

function shorterInArray1 (array) {
	let min = array[0];
	let i =0;
	while(i<array.length)
	{
		if (array[i].length < min.length) 
		{
			min = array[i].length;
		}
		i++;

	}

	return min;
}




/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string
var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar(str,char) {

	let counter = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i]===char) 
		{
			counter++;
		}

		
	}
	return counter;

}



function repeatChar1(str,char) {

	let counter = 0;
	let i =0;
	while(i<str.length)
	{
			if (str[i]===char) 
		{
			counter++;
		}
		i++;
	}
	return counter;

}

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenIndexOddLength(array) {
	let newArray = [];

	for (var i = 0; i < array.length; i++) {
		if (i%2===0) 
		{
			if (array[i].length %2 !==0) 
			{
					newArray.push(array[i]);
			}
		

		}
		
	}
	return newArray;
	// body...
}



function evenIndexOddLength1(array) {
	let newArray = [];
	let i = 1;

	while(i< array.length)
	{
			if (i%2===0) 
		{
			if (array[i].length %2 !==0)

			 {

			 	newArray.push(array[i]);
			 }
			

		}
		i++;

	}
	return newArray;
	// body...
}


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self
var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function powerElementIndex(array) {
	let newArray=[];

	for (var i = 0; i < array.length; i++) {
		newArray.push(array[i]**i);
		
	}
	return newArray;
	// body...
}



function powerElementIndex1(array) {
	let newArray=[];
	let i =0;

	while(i<array.length)
	{
		newArray.push(array[i]**i);
		i++;
	}
	return newArray;
	// body...
}


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index
var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenNumberEvenIndex(array) {
	let newArray=[];

	for (var i = 0; i < array.length; i+=2) {
		if (array[i]%2==0) 
		{
			newArray.push(array[i]);
		}
		
		
	}
	return newArray;
	// body...
}



function evenNumberEvenIndex1(array) {
	let newArray=[];
	let i =0;

	while(i<array.length)
	{
			if (array[i]%2==0) 
		{
			newArray.push(array[i]);
		}
		i+=2;
	}
	return newArray;
	// body...
}