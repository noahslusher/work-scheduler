// CURRENT DATE IN HEADER
let date = document.getElementById('currentDay')
date.textContent = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");



// EVENT TEXTAREAS AND SAVEBUTTON FUNCTION

// Declare variables
var saveButton = document.querySelector('.btn')

// saveButton function
$(".btn").click(function () {
 event.preventDefault();
 // telling saveButton to apply to the event's siblings' values
 var formValue = $(this).siblings(".textarea").val();
 console.log(formValue);
// setting the textarea's values to local storage
 localStorage.setItem('Event', formValue);
});



//  CHANGE CALENDAR COLORS

//Change textarea background color based on time
var checkTime = function () {

 //Get Current time
 var currentTime = moment().format('H');


 //get all elements with class "textarea"
 var timeBlockElements = $(".textarea");


 //loop through textarea classes
 for (var i = 0 ; i < timeBlockElements.length ; i++) {
  
     //Get element i's ID as a string
     var elementID = timeBlockElements[i].id;

     //get element by ID
     var manipID = document.getElementById(timeBlockElements[i].id)

     //remove any old classes from element
     $(timeBlockElements[i].id).removeClass(".present .past .future");

     // apply new class if task is present/past/future
     if (elementID < currentTime) {
         $(manipID).addClass("past");
     } else if (elementID > currentTime) {
         $(manipID).addClass("future");
     } else {
         $(manipID).addClass("present");
     }
 }
}

// checkTime every 5 minutes
setInterval(checkTime(), (1000 * 60) * 5);

