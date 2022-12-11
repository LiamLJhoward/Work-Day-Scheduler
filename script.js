let nineAM = $("#9");
let tenAM = $("#10");
let elevenAM = $("#11");
let twelvePM = $("#12");
let onePM = $("#13");
let twoPM = $("#14");
let threePM = $("#15");
let fourPM = $("#16");
let fivePM = $("#17");

$(document).ready(function () {
  //Todays date
  let displayDate = $("#currentDay");
  displayDate.text(moment().format("dddd MMMM Do"));
  // Current Hour
  let currentHour = moment().format("HH");

  //Logic for changing the colours
  if (currentHour === nineAM) {
    nineAM.addClass("present");
  } else if (currentHour > nineAM) {
    nineAM.addClass("future");
  } else {
    nineAM.addClass("past");
  }
  if (currentHour === tenAM) {
    tenAM.addClass("present");
  } else if (currentHour > tenAM) {
    tenAM.addClass("future");
  } else {
    tenAM.addClass("past");
  }
  if (currentHour === elevenAM) {
    elevenAM.addClass("present");
  } else if (currentHour > elevenAM) {
    elevenAM.addClass("future");
  } else {
    elevenAM.addClass("past");
  }
  if (currentHour === twelvePM) {
    twelvePM.addClass("present");
  } else if (currentHour > twelvePM) {
    twelvePM.addClass("future");
  } else {
    twelvePM.addClass("past");
  }
  if (currentHour === onePM) {
    onePM.addClass("present");
  } else if (currentHour > onePM) {
    onePM.addClass("future");
  } else {
    onePM.addClass("past");
  }
  if (currentHour === twoPM) {
    twoPM.addClass("present");
  } else if (currentHour > twoPM) {
    twoPM.addClass("future");
  } else {
    twoPM.addClass("past");
  }
  if (currentHour === threePM) {
    threePM.addClass("present");
  } else if (currentHour > threePM) {
    threePM.addClass("future");
  } else {
    threePM.addClass("past");
  }
  if (currentHour === fourPM) {
    fourPM.addClass("present");
  } else if (currentHour > fourPM) {
    fourPM.addClass("future");
  } else {
    fourPM.addClass("past");
  }
  if (currentHour === fivePM) {
    fivePM.addClass("present");
  } else if (currentHour > fivePM) {
    fivePM.addClass("future");
  } else {
    fivePM.addClass("past");
  }
});
