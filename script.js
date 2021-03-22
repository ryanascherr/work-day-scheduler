var day;
var dayOfSave;

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
    $("#hour-nine-text-area").val(hourNineLocalText);
    var hourTenLocalText = localStorage.getItem("hour-ten-timeblock-text");
    $("#hour-ten-text-area").val(hourTenLocalText);
    var hourElevenLocalText = localStorage.getItem("hour-eleven-timeblock-text");
    $("#hour-eleven-text-area").val(hourElevenLocalText);
    var hourTwelveLocalText = localStorage.getItem("hour-twelve-timeblock-text");
    $("#hour-twelve-text-area").val(hourTwelveLocalText);
    var hourThirteenLocalText = localStorage.getItem("hour-thirteen-timeblock-text");
    $("#hour-thirteen-text-area").val(hourThirteenLocalText);
    var hourFourteenLocalText = localStorage.getItem("hour-fourteen-timeblock-text");
    $("#hour-fourteen-text-area").val(hourFourteenLocalText);
    var hourFifteenLocalText = localStorage.getItem("hour-fifteen-timeblock-text");
    $("#hour-fifteen-text-area").val(hourFifteenLocalText);
    var hourSixteenLocalText = localStorage.getItem("hour-sixteen-timeblock-text");
    $("#hour-sixteen-text-area").val(hourSixteenLocalText);
    var hourSeventeenLocalText = localStorage.getItem("hour-seventeen-timeblock-text");
    $("#hour-seventeen-text-area").val(hourSeventeenLocalText);
    } else {
    localStorage.clear();
    }
}

function initialize() {
    displayDate();
    styleTimeBlocks();
    displayText();
}

$(".btn-danger").click(function(){
    localStorage.clear();
})

$("#hour-nine-button").click(function(){
    localStorage.setItem("hour-nine-timeblock-text", $("#hour-nine-text-area").val());
    day = moment().format("MMMM Do");
    localStorage.setItem("day", day);
})

$("#hour-ten-button").click(function(){
    localStorage.setItem("hour-ten-timeblock-text", $("#hour-ten-text-area").val());
    day = moment().format("MMMM Do");
    localStorage.setItem("day", day);
})

$("#hour-eleven-button").click(function(){
    localStorage.setItem("hour-eleven-timeblock-text", $("#hour-eleven-text-area").val());
    day = moment().format("MMMM Do");
    localStorage.setItem("day", day);
})

$("#hour-twelve-button").click(function(){
    localStorage.setItem("hour-twelve-timeblock-text", $("#hour-twelve-text-area").val());
    day = moment().format("MMMM Do");
    localStorage.setItem("day", day);
})

$("#hour-thirteen-button").click(function(){
    localStorage.setItem("hour-thirteen-timeblock-text", $("#hour-thirteen-text-area").val());
    day = moment().format("MMMM Do");
    localStorage.setItem("day", day);
})

$("#hour-fourteen-button").click(function(){
    localStorage.setItem("hour-fourteen-timeblock-text", $("#hour-fourteen-text-area").val());
    day = moment().format("MMMM Do");
    localStorage.setItem("day", day);
})

$("#hour-fifteen-button").click(function(){
    localStorage.setItem("hour-fifteen-timeblock-text", $("#hour-fifteen-text-area").val());
    day = moment().format("MMMM Do");
    localStorage.setItem("day", day);
})

$("#hour-sixteen-button").click(function(){
    localStorage.setItem("hour-sixteen-timeblock-text", $("#hour-sixteen-text-area").val());
    day = moment().format("MMMM Do");
    localStorage.setItem("day", day);
})

$("#hour-seventeen-button").click(function(){
    localStorage.setItem("hour-seventeen-timeblock-text", $("#hour-seventeen-text-area").val());
    day = moment().format("MMMM Do");
    localStorage.setItem("day", day);
})

initialize ();