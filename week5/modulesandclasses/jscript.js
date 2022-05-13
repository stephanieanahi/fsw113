// Declare any necessary variables.

// Add am evemt listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.
var printBtn = document.querySelector("#print")
printBtn.addEventListener("click",)
// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
var resetBtn = document.querySelector("#reset")
resetBtn.addEventListener("click", ()=> this.resetValues(input))

function resetValues(){
div.remove(input)
}

// Create a function that instantiates a new student object with the input from the HTML form.
function createNewStudent(){
    var studentName = document.querySelector("#studentName")
    var className = document.querySelector("#className")
    var studentScores = document.querySelector("#studentScores")
    var possibleScores = document.querySelector("#possibleScores")
    let newStudent = new student(studentName.selectedOptions[0].text, className.selectedOptions[0].text, studentScores.selectedOptions[0].text, possibleScores.selectedOptions[0].text )
    newStudent.completeCertificate()
   
}

// Create a function that fills in the student's name, class name, and calculated grade on the certificate .

function completeCertificate(){

}

// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.
const csvString2NumArray = (str) => str.split(',').map( e => parseInt(e))