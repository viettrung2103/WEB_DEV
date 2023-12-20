"use strict";

const addition = (num1, num2) => {
  return num1 + num2;
};

const minus = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const isContain = (string) => {
  if (
    string.includes("+") ||
    string.includes("-") ||
    string.includes("*") ||
    string.includes("/")
  ) {
    return true;
  }
  return false;
};

const displayResult = (string) => {
  const result = document.querySelector("#result");
  result.innerHTML = string;
};

const calculation = (string) => {
  if (string.includes("+")) {
    const resultSplit = string.split("+");
    const result = addition(+resultSplit[0], +resultSplit[1]);
    return result;
  } else if (string.includes("-")) {
    const resultSplit = string.split("-");
    const result = minus(+resultSplit[0], +resultSplit[1]);
    return result;
  } else if (string.includes("*")) {
    const resultSplit = string.split("*");
    const result = multiply(+resultSplit[0], +resultSplit[1]);
    return result;
  } else if (string.includes("/")) {
    const resultSplit = string.split("/");
    const result = divide(+resultSplit[0], +resultSplit[1]);
    return result;
  } else {
    return "Improper arithmation";
  }
};

const main = () => {
  const start = document.querySelector("#start");
  start.addEventListener("click", (e) => {
    const resultStr = document.querySelector("#calculation").value;
    console.log(isContain(resultStr));
    const result = calculation(resultStr);
    console.log(result);
    displayResult(result);
  });
};

main();
