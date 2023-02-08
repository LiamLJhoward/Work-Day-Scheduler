$(document).ready(function () {
  //Todays date
  let displayDate = $("#currentDay");
  displayDate.text(moment().format("dddd MMMM Do"));

  // Current Hour
  let currentHour = moment().format("HH");

  // Save Button
  let saveBtn = $(".saveBtn");

  // Colours time blocks
  for (let i = 9; i < 18; i++) {
    let hour = parseInt($(`#${i}`).attr("id"));
    console.log(currentHour, hour);
    if (currentHour == hour) {
      $(`#${i}`).addClass("present");
    } else if (currentHour < hour) {
      $(`#${i}`).addClass("future");
    } else {
      $(`#${i}`).addClass("past");
    }

    // localStorage getItem here
    saveBtn.on("click", function () {
      let time = $(this).siblings(".hour").text();
      let schedule = $(this).siblings(".schedule").val();

      localStorage.setItem(time, schedule);
    });

    function usePlanner() { 

      $(".hour").each(function() {
        let current = $(this).text();
        let currentPlan = localStorage.getItem(current);

        if(currentPlan !== null) {
          $(this).siblings(".schedule").val(currentPlan);
        }
      }
 )}
 usePlanner();
    }});

   