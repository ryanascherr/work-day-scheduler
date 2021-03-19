var hourNineTextContent = document.getElementById("hour-nine-text-area");
//display date/time: done
//make time blocks for hours 9-5: done
//
function displayDate() {
    document.getElementById("date").textContent = moment().format("MMMM Do YYYY, h:mm:ss a");
    setInterval(function() {
        document.getElementById("date").textContent = moment().format("MMMM Do YYYY, h:mm:ss a");
}, 1000);
}

function styleTimeBlocks() {

var timeBlock = document.querySelectorAll(".time-block");
var currentTime = moment().format("H");
var currentTimeNumber = parseInt(currentTime);
var numberString = [];
var actualNumber = [];

for (i = 0; i < timeBlock.length; i++) {
    numberString[i] = timeBlock[i].getAttribute("data-time");
    actualNumber[i] = parseInt(numberString[i]);
    if (currentTimeNumber > actualNumber[i]) {
        timeBlock[i].classList.add("past");
    } else if (currentTimeNumber === actualNumber[i]) {
        timeBlock[i].classList.add("present");
    } else {
        timeBlock[i].classList.add("future");
    }
}
}

function initialize() {
    displayDate();
    styleTimeBlocks();
    var hourNineTextNew = localStorage.getItem("hour-nine-timeblock-text");
    document.getElementById("hour-nine-text-area").value = hourNineTextNew;
}

initialize ();

document.getElementById("hour-nine-button").addEventListener("click", function(){
    localStorage.setItem("hour-nine-timeblock-text", document.getElementById("hour-nine-text-area").value);
})