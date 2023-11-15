"use strict";

const dice = +prompt("How many dices do you want to throw? ");
const time = +prompt("How many time do you want to throw? ");

const randomNumber = (min, max) => {
  const result = Math.floor(Math.random(max + 1 - min)) + min;
  return result;
};

const resultFromThrown = (numberOfDice) => {
  let sum = 0;
  for (let i = 1; i <= numberOfDice; i++) {
    const result = randomNumber(1, 6);
    sum += result;
    console.log(`Result after throw dice: ${i} is ${sum}`);
  }
  return sum;
};

const throwDice = (numberOfTime, numberOfDice) => {
  let finalSum = 0;
  for (let i = 1; i <= numberOfTime; i++) {
    const sum = resultFromThrown(numberOfDice);
    finalSum += sum;
    console.log(`Result after throw : ${i} time is ${finalSum}`);
  }
  return finalSum;
};

console.log(randomNumber(1, 6));
// console.log(resultFromThrown(dice));
// console.log(throwDice(time, dice));
