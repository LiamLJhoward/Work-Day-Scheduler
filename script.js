$(document).ready(function() {
//Todays date
    let displayDate = $("#currentDay");
    displayDate.text(moment().format("dddd MMMM Do"));
// Current Hour
    let currentHour = moment().format("HH");

});