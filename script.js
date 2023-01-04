$(document).ready(function () {
  //Todays date
  let displayDate = $("#currentDay");
  displayDate.text(moment().format("dddd MMMM Do"));

  // Current Hour
  let currentHour = moment().format("HH");

for (let i = 9; i < 18; i++) {
   
  let hour = parseInt($(`#${i}`).attr("id"))
  console.log(currentHour, hour)
  if (currentHour == hour) {
    $(`#${i}`).addClass("present");
  } else if (currentHour < hour) {
    $(`#${i}`).addClass("future");
  } else {
    $(`#${i}`).addClass("past");
  }
  // localStorage getItem here
  
$(".saveBtn").on("click", function(){
 let text = $("textarea").attr(".textarea");
 localStorage.setItem(hour, JSON.stringify(text));
}); 
  
}


});
