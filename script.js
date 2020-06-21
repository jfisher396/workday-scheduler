//Moment.js code for current date and time
let NowMoment = moment().format("MMMM Do YYYY");
let displayDate = document.getElementById('currentDay');
displayDate.innerHTML = NowMoment;
let currentHour = moment().format("HH");

console.log(currentHour);

let nine = $("#9").text();
let ten = $("#10").text();
let eleven = $("#11").text();
let twelve = $("#12").text();
let thirteen = $("#13").text();
let fourteen = $("#14").text();
let fifteen = $("#15").text();
let sixteen = $("#16").text();
let seventeen = $("#17").text();
console.log(fourteen);

let intFromNine = parseInt(nine);
let intFromTen = parseInt(ten);
let intFromEleven = parseInt(eleven);
let intFromTewelve = parseInt(twelve);
let intFromThirteen = parseInt(thirteen) + 12;
let intFromFourteen = parseInt(fourteen) + 12;
let intFromFifteen = parseInt(fifteen) + 12;
let intFromSixteen = parseInt(sixteen) + 12;
let intFromSeventeen = parseInt(seventeen) + 12;
console.log(intFromSeventeen)

console.log("Here's the int that was in #9 : ", intFromNine);


$(".time-div").each(function(){
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

//"hour-9" -> split(-) => ["hour","9"]
    