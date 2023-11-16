"use strict";

const randomNumber = (min, max) => {
  const result = Math.floor(Math.random() * (max + 1 - min)) + min;
  // console.log(result);
  return result;
};

const resultFromThrown = (numberOfDice) => {
  let sum = 0;
  for (let i = 1; i <= numberOfDice; i++) {
    const result = randomNumber(1, 6);
    sum += result;
    // console.log(`Result after throw dice: ${i} is ${sum}`);
  }
  // console.log();
  return sum;
};

const throwDice = (numberOfTime, numberOfDice, targetNum) => {
  let count = 0;
  for (let i = 1; i <= numberOfTime; i++) {
    const sum = resultFromThrown(numberOfDice);
    // console.log(`result after each throw:${sum}`);
    if (sum === targetNum) {
      count++;
    }
    // console.log(`count: ${count}`);
  }
  return count;
};

const getProbability = (count, numbeOfTime) => {
  const result = ((count / numbeOfTime) * 100).toFixed(2);
  return result;
};

const getDiceAndTarget = () => {
  const dice = +prompt("How many dice do you want to throw? ");
  const target = +prompt(
    "What number you want to get after throwing these dice?  "
  );
  return [dice, target];
};

const numberOfTime = 10000;
const [numberOfDice, targetNumber] = getDiceAndTarget();
const count = throwDice(numberOfTime, numberOfDice, targetNumber);
const probability = getProbability(count, numberOfTime);
// console.log(probability);

const resultText = `Proability to get sum ${targetNumber} with ${numberOfDice} is ${probability}%`;

document.querySelector(".result").innerHTML = resultText;
