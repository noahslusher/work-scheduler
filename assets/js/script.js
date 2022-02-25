// Declare variables
var saveButton = document.querySelector('.btn')
var input = $('input').val()
console.log(input)


// Assign saveTasks function to button
$('.btn').click(function () {
 saveTasks()
})

// saveTasks function
function saveTasks() {
 localStorage.setItem("task", JSON.stringify(input))
}