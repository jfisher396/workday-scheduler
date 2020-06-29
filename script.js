$(document).ready(function () {

    //Moment.js code for current date and time
    let NowMoment = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById('currentDay');
    displayDate.innerHTML = NowMoment;
    let currentHour = moment().format("HH");
    //variables 
    let nine = $("#9").text();
    let ten = $("#10").text();
    let eleven = $("#11").text();
    let twelve = $("#12").text();
    let thirteen = $("#13").text();
    let fourteen = $("#14").text();
    let fifteen = $("#15").text();
    let sixteen = $("#16").text();
    let seventeen = $("#17").text();
    //variables to compare times from scheduler with actual time
    let intFromNine = parseInt(nine);
    let intFromTen = parseInt(ten);
    let intFromEleven = parseInt(eleven);
    let intFromTewelve = parseInt(twelve);
    let intFromThirteen = parseInt(thirteen) + 12;
    let intFromFourteen = parseInt(fourteen) + 12;
    let intFromFifteen = parseInt(fifteen) + 12;
    let intFromSixteen = parseInt(sixteen) + 12;
    let intFromSeventeen = parseInt(seventeen) + 12;

    // Button funcition to clear local storage and clear contents
    $("#clearFieldsBtn").click(function (event) {
        event.preventDefault;
        $(textarea).empty();
        localStorage.clear();
        
    })

    $(".time-div").each(function () {
        var timeDiv = $(this).attr("id").split("-")[1];
        console.log("timeDiv:", timeDiv);
        if (currentHour === timeDiv) {
            console.log("equal");
            $(this).addClass("present");
        } else if (currentHour < timeDiv) {
            console.log("less");
            $(this).removeClass("present");
            $(this).addClass("future");
        } else if (currentHour > timeDiv) {
            console.log("greater");
            $(this).removeClass("future");
            $(this).addClass("past");
        }
    })


    $(".saveBtn").click(function (event) {
        event.preventDefault();
        // $("time-block")
        var value = $(this).siblings(".time-block").val();
        console.log(value)
        var time = $(this).parent().attr("id").split("-")[1];
        console.log(time);
        localStorage.setItem(time, value);
    })

    $("#hour-09 .time-block").val(localStorage.getItem("09"));
    $("#hour-10 .time-block").val(localStorage.getItem("10"));
    $("#hour-11 .time-block").val(localStorage.getItem("11"));
    $("#hour-12 .time-block").val(localStorage.getItem("12"));
    $("#hour-13 .time-block").val(localStorage.getItem("13"));
    $("#hour-14 .time-block").val(localStorage.getItem("14"));
    $("#hour-15 .time-block").val(localStorage.getItem("15"));
    $("#hour-16 .time-block").val(localStorage.getItem("16"));
    $("#hour-17 .time-block").val(localStorage.getItem("17"));
});