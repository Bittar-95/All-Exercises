console.log('Here is : ', 'Object')


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/


var personalInfo={firstName:'Mohammad',lastName:'Albittar',age:23,DOB:'31/12/1995',favoriteFood:['Mansaf','Homous','Falafel'] ,favoriteMovie:['Dumb And Dumber','Rush Hour','Mission Impossible','The Hunger Game','Home Alone'] };



var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alu7yuju8kioex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 },

];




/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides
Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/

function firstName(obj) {
  var fullNames='';

for (var i = 0; i <obj.length; i++) {

  fullNames+=obj[i].name.first+' ';

  
}
return fullNames;
}



/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons
Ex: averageAge(persons) => 41.2
*/

function averageAge(obj) {

  let total = 0;
  for (var i = 0; i < obj.length; i++) {
    total+=obj[i].age;
  }

  return total/(i);

}


/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person
Ex: olderPerson(persons) => "Soso Al-Amora"
*/
function olderPerson(obj) {
  let max = obj[0].age;
  let index = 0;
  
  for (var i = 1; i < obj.length; i++) {
    if (obj[i].age>max) 
    {
      max = obj[i].age;
      index = i;
    }
    
  }

return obj[index].name.first + ' '+obj[index].name.last ;
}

/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
*/

function longestName(obj) {

  var max = obj[0].name.first.length + obj[0].name.last.length;
  var index=0;
  for (var i = 0; i < obj.length; i++) {
    if (obj[i].name.first.length + obj[i].name.last.length>max) 
    {
      max = obj[i].name.first.length + obj[i].name.last.length;
      index = i;

    }

  }

  return obj[index].name.first + ' '+ obj[index].name.last;

}


/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
*/

//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??
Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/

function repeatWord(str){
  var arr = str.split(' ');
  var arrayResult=[];


  for (var i =0;i<arr.length; i++) {

  let word = arr[i].toLowerCase();
  let counter = 1;

for (var a = i+1; a < arr.length; a++) {
  if (word === arr[a].toLowerCase()) 
  {
    arr.splice(a,1);
    counter++;
    a =a -1;
  }
}
  arrayResult.push({key:word,count:counter});
  }

return arrayResult;
}
//--------------------------------------------------------
//Another Solution
// function repeatWord(str){
//   var arr = str.split(' ');
//   var arrayResult={};



//   for (var i =0;i<arr.length; i++) {

//   let word = arr[i].toLowerCase();
//   let counter = 1;

// for (var a = i+1; a < arr.length; a++) {
//   if (word === arr[a].toLowerCase()) 
//   {
//     arr.splice(a,1);
//     counter++;
//     a =a -1;
//   }
// }
//   arrayResult[word]=counter;
//   }

// return arrayResult;
// }

// ---------------------------------------------------------
// function repeatWord(str){
//   str = str.toLowerCase();
//   var words = str.split(' '); //' ' to split into words. '' to split into characters
//   var repeats = {};
 
//   words = words.sort();
//   var count = 1;
//   var word = words[0];
//   for(var i = 1; i<words.length; i++){
//     if(words[i]!==word){
//       repeats[word]=count;
//       count = 1;
//       word = words[i];
//     }
//     else{
//       count++;
//     }
//   }
//   word = words[words.length-1]
//   repeats[word] = count;
//   return repeats;
// }

/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??
Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/


function repeatChar(str) {
	
	var result=[];
	var charArray=[];
	for (var i = 0; i < str.length; i++) {
		charArray.push(str[i]);
	}


	for (var i = 0; i < charArray.length; i++) {
		let chr = charArray[i].toLowerCase();
		let count = 1;
	for (var j= i+1; j < charArray.length; j++) {
		if (chr === charArray[j].toLowerCase()) 
		{
			charArray.splice(j,1);
			count++;
			j=j-1;
		}
		
	}
		//result.push({char :chr,counter:count});
		console.log(chr);
		console.log(count);
		
		
	}




	return result;
	

}


/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array
Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/
function selectFromObject(obj,array) {

	for (var i = 0; i < array.length; i++) {
		if () {}

}


/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object
Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/


/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object
Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/


/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable
Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/


/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable
Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/


/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable
Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/


/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object
Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']
*/


/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object
Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]
*/


/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/


/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object
Ex: keysArray({a:1,b:2,c:3,d:4})
=> 4
*/


/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even
Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/


/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key
Ex: evenValue({car:1, school:2, monster:3, alexMercer:4})=> 4
*/