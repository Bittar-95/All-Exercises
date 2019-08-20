/*
Sing a Song
Create a class called Song() with two properties:
songName - i.e., 'A day in the Life'
bandName - i.e., 'The Beatles'
create a new instance of the class, storing it in a variable
Add two methods to the prototype:
countName - return the total number of words in the song name
createElement - create a new DOM element with jQuery
Create an instance with the new keyword
Append the instance to the DOM
*/


function Song(songName,bandName)
{
    this.songName = songName;
    this.bandName = bandName;

}


var song = new Song('A day in the Life','The Beatles');

Song.prototype.countName = function()
{
    var arrayWordCount = `${this.songName}`.split(' ');
    return arrayWordCount.length;
    

}

Song.prototype.createElement = function()
{
    $('body').append(`<div>Song Name: ${this.songName} Band Name: ${this.bandName}</div>`)
    
}

/*
The Cat
Write yourself a virtual cat - animals with a CLI are so much nicer than ones with fur.

Create an object that represents a cat. It should have properties for tiredness, hunger, lonliness and happiness
Next, write methods that increase and decrease those properties. Call them something
 that actually represents what would increase or decrease these things, like "feed", "sleep", or "pet".
Last, write a method that prints out the cat's status in each area. (Be creative e.g. Paws is really hungry, 
    Paws is VERY happy.)
Bonus: Make the functions take arguments that increase or decrease arbitrary amounts
Bonus: Make the functions as arbitrary as cats are - sometimes make it so the cat doesn't want to be petted.
*/


function Cat(tiredness,hunger,lonliness,happiness)
{
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.lonliness = lonliness;
    this.happyness= happiness;

   
}


cat1 = new Cat(5,5,5,5);


Cat.prototype.increase=function(type,increasingValue)
{
    
    this[type]+=increasingValue;
}

Cat.prototype.decrease=function(type,decreasingValue)
{
    
    this[type]-=decreasingValue;
}



Cat.prototype.increasemultikeys=function(type,increasingValue)
{
    for (let index = 0; index < type.length; index++) {
        
         this[type[index]]+=increasingValue;
    }
    
   
}

Cat.prototype.decreasemultikeys=function(type,decreasingValue)
{
    
    for (let index = 0; index < type.length; index++) {
        
        this[type[index]]-=decreasingValue;
   }
}



/*

The Reading List
An object-oriented book-list!

Create a class BookList

Create another class called Book

BookLists should have the following properties:

Number of books marked as read
Number of books marked not read yet
A reference to the next book to read (book object)
A reference to the current book being read (book object)
A reference to the last book read (book object)
An array of all the Books


Each Book should have several properties:

Title
Genre
Author
Read (true or false)
Read date, can be blank, otherwise needs to be a JS Date() object


Every Booklist should have a few methods:

.add(book)
should add a book to the books list.


.finishCurrentBook()
should mark the book that is currently being read as "read"


Give it a read date of new Date(Date.now())

Change the last book read to be the book that just got finished
Change the current book to be the next book to be read
Change the next book to be read property to be the first unread book you find in the list of books
Booklists and Books might need more methods than that. Try to think of more that might be useful.



*/

// function BookList(numberreadbook,numbernotreadbook,nextbook,currentbook,books)
// {
// this.numberofbooksread=numberreadbook;
// this.numberofbooksnotreadyet = numbernotreadbook
// this.nextbook=nextbook;
// this.currentbook=currentbook;
// this.boooks=books;


// //this.add = function(){}

// this.add = function(title,author,read,readdate)
// {
//     t;


// }

// }
// function Book(title,author,read,readdate)
// {
//     this.Title = title;
//     this.Author = author;
//     this.Read = read;
//     this.Readdate = readdate;
// }



// var mybook =[new Book('tomandjerry','todfgm',false,'15/2/2013'),
// new Book('tomandjerry','togdm',true,'15/2/2013'),
// new Book('tomandjerry','tom',false,'15/2/2013')];


// readbook = new BookList(1,2,'abababab','hfhfhfhfh',mybook);






function BookList(numberOfBookRead,numberOfBookNotRead,bookNextRead,bookRead,bookCurrentBeingRead,books)
{
    this.numberOfBookRead=numberOfBookRead;
    this.numberOfBookNotRead=numberOfBookNotRead;
    this.bookNextRead=bookNextRead;
    this.bookBeingRead=bookBeingRead;
    this.bookCurrentBeingRead=bookCurrentBeingRead;
    this.books=books;

}
function Book(title,genre,author,read,readDate)
{
this.title=title;
this.genre=genre ;//true or false
this.author=author;
this.read=read; //true or false
this.readDate=readDate;

}

var Mybooks = [new Book('TomAndJerry',false,'ahmad',true,'20/10/2013')];
var age = 15;
//var booklist = new BookList('0','1','TomAndJerry','none','TomAndJerry','Mybooks');



