//Moment.js code for current date and time
let NowMoment = moment().format("MMMM Do YYYY");
let displayDate = document.getElementById('currentDay');
displayDate.innerHTML = NowMoment;
let currentHour = moment().format("HH");

console.log(currentHour)

// let nine = $("#9");
// let ten = $("#10");
// let eleven = $("#11");
// let twelve = $("#12");
// let thirteen = $("#13");
// let fourteen = $("#14");
// let fifteen = $("#15");
// let sixteen = $("#16");
// let seventeen = $("#17");



// function timeComparison () {
//     if (currentHour > plannerHour) {
//         console.log("future")
//     }
// }