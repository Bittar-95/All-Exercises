/*
Q1:
Check if jQuery is loaded
*/

$('document').ready(function(){
    if(jQuery)
    {
        console.log('Yes');
    }
    else
    {
        console.log('No');
    }




});


/*
Q2:
If You would have very long website - How to help user with fast getting back on top :)
*/


$(document).ready(function(){


    $("#top").click(function(){
        $('html,body').animate({scrollTop:$('html').height()},2000)
      
     
    });



    $("#down").click(function(){
        $('html,body').animate({scrollTop:"0"},2000)
      
     
    });



    
  });

  



  




/*
Q3:
If You would like to change sizes of Your div/button with on click :)
*/

$('#btn1').click(function(){
   // $('#box').animate({width:'+=2px',height:'+=2px'},500)


   $('#box').css({width:'500px',height:'500px'});


});

$('#btn2').click(function(){
$('#box').css({width:'150px',height:'150px'});

});

/*
Q4:
Learn how to fadein your boxes
*/
var check = true;
$('#btnfade').click(function(){
     
    // $('#div1').fadeIn(1000);

    // $('#div2').delay(1000).fadeIn(3000);

    // $('#div3').delay(2000).fadeIn(3000);

    // $('#div1').toggle(1000);

    // $('#div2').delay(2000).toggle(3000);

    // $('#div3').delay(3000).toggle(3000);

    if(check)
    {
    $('#div1').fadeIn(1000);

    $('#div2').delay(1000).fadeIn(3000);

    $('#div3').delay(2000).fadeIn(3000);
    check=false;


    }
    else
    {
        $('#div1').fadeOut(1000);

        $('#div2').delay(1000).fadeOut(3000);
    
        $('#div3').delay(2000).fadeOut(3000);
        check=true;

    }



});


/*
Q5:
User must first accept then he or she can signup
*/

$('submitbtn').click(function(){
    $('accept').


});




/*
Q6:
Let them print
*/


/*
Q7:
Can username be too long? Yest it can - lets limit that
*/


/*
Q8:
Wanna make some words bolder, do it with jQuery
*/


/*
Q9:
Add new div to your website
*/


/*
Q10:
Select values from a JSON object using jQuery
*/


/*
Q11:
Add element within ul list
*/


/*
Q12:
Know what user puts into textbox
*/


/*
Q13:
Change input value
*/



// if you finish try a new thing by your self
// or go and repeat the DOM exercises using jQuery 