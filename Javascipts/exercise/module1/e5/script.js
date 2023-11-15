const isLeapYear = (year) => {
  if (year % 4 !== 0) {
    return false;
  } else {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 !== 0) {
      return true;
    } else {
      return false;
    }
  }
};

const year = +prompt("Enter a year");

document.querySelector("#year").innerText = year;
const showIsLeap = document.querySelector("#is-leap");
const text = isLeapYear(year) ? "This is leap year" : "This is not a leap year";

showIsLeap.innerText = text;
