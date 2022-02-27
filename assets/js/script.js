// CURRENT DATE
let date = document.getElementById('currentDay')
date.textContent = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");



// EVENT TEXTAREAS AND BUTTON FUNCTION


// Declare variables
var saveButton = document.querySelector('.btn')


$(".btn").click(function () {
 event.preventDefault();
 var formValue = $(this).siblings(".textarea").val();
 console.log(formValue);
 //var listItem = $(this).parent().data("hour");

 localStorage.setItem('Event', formValue);
});



//  CHANGE CALENDAR COLORS

//Change textarea background color based on time
var checkTime = function () {

 //Get Current time
 var currentTime = moment().format('H');


 //get all elements with class "taskarea"
 var timeBlockElements = $(".textarea");


 //loop through taskarea classes
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

