"use strict";

const displayName = (fullName) => {
  const result = document.querySelector("#target");
  const content = `Your name is ${fullName}`;
  result.innerHTML = content;
};

const handleClick = (e) => {
  e.preventDefault();
  const fName = document.querySelector("input[name=firstname]").value;
  const lName = document.querySelector("input[name=lastname]").value;
  const fullName = fName + " " + lName;
  // console.log("this is event", e);
  console.log("this is fname", fName);
  console.log("this is lName", lName);
  console.log("this is fName", fullName);
  displayName(fullName);
};

const nameForm = document.querySelector("#source");
nameForm.addEventListener("submit", handleClick);
