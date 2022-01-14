// display the cuurent day at the top of the calendar
$("#currentDay").text(moment().format("MMM DD, YYYY - hh:mm a"));

// save events on local storage

$(".saveBtn").on("click", function() {
    var events = $(this).siblings(".description")
    .val()
    .trim();
    var times = $(this).siblings(".hour").text();
    localStorage.setItem(times, events);
})

// track the time on schdular is present/past/future
var timeTracker = function () {
    // get current time
    var currentTime = moment().hour();

    // get time from the time blocks
    $(".time-block").each(function() {
        var timeBlock = parseInt($(this).attr("id"));

        // apply new class if time is past/present/future
        if (timeBlock == currentTime) {
            $(this).addClass("present")
        }
        else if (timeBlock < currentTime) {
            $(this).addClass("past")
        }
        else {
            $(this).addClass("future")
        }
    })
}

timeTracker();
