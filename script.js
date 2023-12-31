// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// #currentDay = ("current day"); {
// const date = new Date();
// console.log(date);
// const todaysDate = date.toLocaleDateString();
// console.log(todaysDate)
// }

$(function () {
  const calendar = document.getElementById("currentDay");
  const date = new Date();
  console.log(date);
  const todaysDate = date.toLocaleDateString();
  console.log(todaysDate);
  calendar.textContent = todaysDate;

  const buttons = document.getElementsByClassName("saveBtn");
  console.log(buttons);

  for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
    button.addEventListener("click", clickSave);
  }

  function clickSave(e) {
    const hour = e.target.parentElement.id;
    const storage = e.target.previousElementSibling.value;
    console.log(hour);
    console.log(storage);
    localStorage.setItem(hour, storage);
  }

  const textAreas = document.querySelectorAll("textarea");
  console.log(textAreas);

  for (let index = 0; index < textAreas.length; index++) {
    const textArea = textAreas[index];
    const hour = textArea.parentElement.id;
    const storage = localStorage.getItem(hour);
    if (storage) textArea.textContent = storage

    console.log(date.getHours())
    const hourNumber = parseInt(hour.slice(5))

    const parentClassList = textArea.parentElement.classList

    if (hourNumber===date.getHours()) parentClassList.add("present");
    else if (hourNumber<date.getHours()) parentClassList.add("past");
    else parentClassList.add("future");
  }
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
