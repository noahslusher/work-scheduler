// Declare variables
var saveButton = document.querySelector('.btn')


// Assign saveTasks function to button
$('.btn').click(function () {
var input = $('textarea').val()
 saveTasks(input)
 console.log(input)
})

// saveTasks function
function saveTasks(input) {
 localStorage.setItem("task", JSON.stringify(input))
}

// //Change textarea background color based on time
// var checkTime = function () {

//  //Get Current time
//  var currentTime = moment().format('H');

//  //get all elements with class "taskarea"
//  var timeBlockElements = $(".input");

//  //loop through taskarea classes
//  for (var i = 0 ; i < timeBlockElements.length ; i++) {

//      //Get element i's ID as a string
//      var elementID = timeBlockElements[i].id;

//      //get element by ID
//      var manipID = document.getElementById(timeBlockElements[i].id)

//      //remove any old classes from element
//      $(timeBlockElements[i].id).removeClass(".present .past .future");

//      // apply new class if task is present/past/future
//      if (elementID < currentTime) {
//          $(manipID).addClass("past");
//      } else if (elementID > currentTime) {
//          $(manipID).addClass("future");
//      } else {
//          $(manipID).addClass("present");
//      }
//  }
// }

// // checkTime every 5 minutes
// setInterval(checkTime(), (1000 * 60) * 5);