//display date/time: done
//make time blocks for hours 9-5:
//

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
        } else if (currentTimeNumber = actualNumber[i]) {
            timeBlock[i].classList.add("present");
        } else if (currentTimeNumber < actualNumber[i]){
            timeBlock[i].classList.add("future");
        }
    }
    
function displayDate() {
    document.getElementById("date").textContent = moment().format("MMMM Do YYYY, h:mm:ss a");
    setInterval(function() {
        document.getElementById("date").textContent = moment().format("MMMM Do YYYY, h:mm:ss a");
}, 1000);
}
displayDate();

// function checkTime() {
//     var currentTime = moment().format("H");
//     var currentTimeNumber = parseInt(currentTime);
    
//     var nine = document.getElementById("hour-9").getAttribute("data-time");
//     console.log(nine);
//     var nineNumber = parseInt(nine);

//     var test = [];
//     for (i = 0; i < timeBlock.length; i++) {
//         timeBlock[i].getAttribute("data-time");
//         test[i] = parseInt(timeBlock[i]);
//     }

//     if (currentTimeNumber > nineNumber) {
//         hourNine.setAttribute("class", "row time-block border past");
//     } else if (currentTimeNumber < nineNumber) {
//         hourNine.setAttribute("class", "row time-block border future");
//     } else {
//         hourNine.setAttribute("class", "row time-block border present");
//     }
// }

// checkTime();