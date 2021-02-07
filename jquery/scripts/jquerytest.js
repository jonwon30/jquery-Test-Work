
// best practice is to wrap the code around

// $( document ).ready(function() {
  // code goes in here
// });

//$( document ).ready(function() {
    //$( "a" ).click(function( event ) {
        //alert( "Thanks for visiting!" );
    //});
//});

/* events:
click	        keypress	submit	    load
dblclick	    keydown	    change	    resize
mouseenter	  keyup	    focus	    scroll
mouseleave	 	blur	    unload */

// example $("p").click();

// mouseenter The function is executed when the mouse pointer enters the HTML element

// place that describes all functions /www.w3schools.com/jquery/jquery_events.asp

//  on event allows for more events

$(document).ready(function(){
    $("p").on({
      mouseenter: function(){
        $(this).css("background-color", "lightgray");
      },  
      mouseleave: function(){
        $(this).css("background-color", "lightblue");
      }, 
      click: function(){
        $(this).css("background-color", "yellow");
      }  
    });
  });

  /*
  $(document).ready(function(){
    $("button").click(function(){
      $("p").hide(1000);
    });
  }); */

  $(".hide-show").click(function(){
    $("p").toggle(1000);
  });