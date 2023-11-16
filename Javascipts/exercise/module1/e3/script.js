"use strict";

const num1 = +prompt("Enter number 1: ");
const num2 = +prompt("Enter number 2: ");
const num3 = +prompt("Enter number 3: ");

console.log(typeof num1);
const numList = [num1, num2, num3];

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / numList.length;
console.log(sum, product, average);

const sumResult = document.querySelector("#sum_result");
sumResult.innerHTML = sum;
const productResult = document.querySelector("#product_result");
productResult.innerHTML = product;
const averageResult = document.querySelector("#average_result");
averageResult.innerHTML = average;
