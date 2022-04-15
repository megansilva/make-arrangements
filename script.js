$(document).ready(function () {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    $('.saveBtn').on('click', function () {
        console.log(this);
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(time, value);
    });

    // $("#time8 .description").val(localStorage.getItem("time8"));
    // $("#time9 .description").val(localStorage.getItem("time9"));
    // $("#time10 .description").val(localStorage.getItem("time10"));
    // $("#time11 .description").val(localStorage.getItem("time11"));
    // $("#time12 .description").val(localStorage.getItem("time12"));
    // $("#time13 .description").val(localStorage.getItem("time13"));
    // $("#time14 .description").val(localStorage.getItem("time14"));
    // $("#time15 .description").val(localStorage.getItem("time15"));
    // $("#time16 .description").val(localStorage.getItem("time16"));
    // $("#time17 .description").val(localStorage.getItem("time17"));

    function hourTrack() {
        var currentHour = moment().hours();

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("time")[1]);
            console.log(blockHour, currentHour)

            if (blockHour < currentHour) {
                $(this).addClass("past");

            } else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");

            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }
    hourTrack();
    var interval = setInterval(hourTrack, 15000);

    $("#time8 .description").val(localStorage.getItem("time8"));
    $("#time9 .description").val(localStorage.getItem("time9"));
    $("#time10 .description").val(localStorage.getItem("time10"));
    $("#time11 .description").val(localStorage.getItem("time11"));
    $("#time12 .description").val(localStorage.getItem("time12"));
    $("#time13 .description").val(localStorage.getItem("time13"));
    $("#time14 .description").val(localStorage.getItem("time14"));
    $("#time15 .description").val(localStorage.getItem("time15"));
    $("#time16 .description").val(localStorage.getItem("time16"));
    $("#time17 .description").val(localStorage.getItem("time17"));

});





