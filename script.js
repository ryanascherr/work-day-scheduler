//display date/time: done
//make time blocks for hours 9-5:
//
$(document).ready(function () {

    function displayDate() {
        document.getElementById("date").textContent = moment().format("MMMM Do YYYY, h:mm:ss a");
        setInterval(function() {
            document.getElementById("date").textContent = moment().format("MMMM Do YYYY, h:mm:ss a");
    }, 1000);
    }
    
    displayDate();







})