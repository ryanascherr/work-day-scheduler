var day;
var dayOfSave;
var allTextAreas = document.querySelectorAll(".description");

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

    //get attribute from each timeblock and put it in array
    numberString[i] = timeBlock[i].getAttribute("data-time");

    //turn string into integer
    actualNumber[i] = parseInt(numberString[i]);

    //style based on current time compared to hour of time block
    if (currentTimeNumber > actualNumber[i]) {
        timeBlock[i].classList.add("past");
    } else if (currentTimeNumber === actualNumber[i]) {
        timeBlock[i].classList.add("present");
    } else {
        timeBlock[i].classList.add("future");
    }
}
}

function displayText() {

    // If a new day has passed since the last save, clear local storage. Otherwise, displayed saved text in appropriate time block.
    dayOfSave = localStorage.getItem("day");
    if (moment().format("MMMM Do") === dayOfSave) {
    var hourNineLocalText = localStorage.getItem("hour-nine-timeblock-text");
    document.getElementById("hour-nine-text-area").value = hourNineLocalText;
    var hourTenLocalText = localStorage.getItem("hour-ten-timeblock-text");
    document.getElementById("hour-ten-text-area").value = hourTenLocalText;
    var hourElevenLocalText = localStorage.getItem("hour-eleven-timeblock-text");
    document.getElementById("hour-eleven-text-area").value = hourElevenLocalText;
    var hourTwelveLocalText = localStorage.getItem("hour-twelve-timeblock-text");
    document.getElementById("hour-twelve-text-area").value = hourTwelveLocalText;
    var hourThirteenLocalText = localStorage.getItem("hour-thirteen-timeblock-text");
    document.getElementById("hour-thirteen-text-area").value = hourThirteenLocalText;
    var hourFourteenLocalText = localStorage.getItem("hour-fourteen-timeblock-text");
    document.getElementById("hour-fourteen-text-area").value = hourFourteenLocalText;
    var hourFifteenLocalText = localStorage.getItem("hour-fifteen-timeblock-text");
    document.getElementById("hour-fifteen-text-area").value = hourFifteenLocalText;
    var hourSixteenLocalText = localStorage.getItem("hour-sixteen-timeblock-text");
    document.getElementById("hour-sixteen-text-area").value = hourSixteenLocalText;
    var hourSeventeenLocalText = localStorage.getItem("hour-seventeen-timeblock-text");
    document.getElementById("hour-seventeen-text-area").value = hourSeventeenLocalText;
    } else {
    localStorage.clear();
    }
}

function initialize() {
    displayDate();
    styleTimeBlocks();
    displayText();
}

document.querySelector(".btn-danger").addEventListener("click", function(){
    localStorage.clear();
})

document.getElementById("hour-nine-button").addEventListener("click", function(){
    localStorage.setItem("hour-nine-timeblock-text", document.getElementById("hour-nine-text-area").value);
    day = moment().format("MMMM Do");
    localStorage.setItem("day", day);
})

document.getElementById("hour-ten-button").addEventListener("click", function(){
    localStorage.setItem("hour-ten-timeblock-text", document.getElementById("hour-ten-text-area").value);
    day = moment().format("MMMM Do");
    localStorage.setItem("day", day);
})

document.getElementById("hour-eleven-button").addEventListener("click", function(){
    localStorage.setItem("hour-eleven-timeblock-text", document.getElementById("hour-eleven-text-area").value);
    day = moment().format("MMMM Do");
    localStorage.setItem("day", day);
})

document.getElementById("hour-twelve-button").addEventListener("click", function(){
    localStorage.setItem("hour-twelve-timeblock-text", document.getElementById("hour-twelve-text-area").value);
    day = moment().format("MMMM Do");
    localStorage.setItem("day", day);
})

document.getElementById("hour-thirteen-button").addEventListener("click", function(){
    localStorage.setItem("hour-thirteen-timeblock-text", document.getElementById("hour-thirteen-text-area").value);
    day = moment().format("MMMM Do");
    localStorage.setItem("day", day);
})

document.getElementById("hour-fourteen-button").addEventListener("click", function(){
    localStorage.setItem("hour-fourteen-timeblock-text", document.getElementById("hour-fourteen-text-area").value);
    day = moment().format("MMMM Do");
    localStorage.setItem("day", day);
})

document.getElementById("hour-fifteen-button").addEventListener("click", function(){
    localStorage.setItem("hour-fifteen-timeblock-text", document.getElementById("hour-fifteen-text-area").value);
    day = moment().format("MMMM Do");
    localStorage.setItem("day", day);
})

document.getElementById("hour-sixteen-button").addEventListener("click", function(){
    localStorage.setItem("hour-sixteen-timeblock-text", document.getElementById("hour-sixteen-text-area").value);
    day = moment().format("MMMM Do");
    localStorage.setItem("day", day);
})

document.getElementById("hour-seventeen-button").addEventListener("click", function(){
    localStorage.setItem("hour-seventeen-timeblock-text", document.getElementById("hour-seventeen-text-area").value);
    day = moment().format("MMMM Do");
    localStorage.setItem("day", day);
})

initialize ();