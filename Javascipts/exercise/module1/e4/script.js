"use strict";

const getRandomNum = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

const houseList = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
console.log(houseList[1]);

const houseName = houseList[getRandomNum(0, 3)];

const wizName = prompt("What is your name? ");
const showName = document.querySelector(".result");
// showName.innerHTML = `<p>${wizName}, you are ${houseName}.</p>`
const randonNum = getRandomNum(0, 3);
console.log(randonNum);
switch (randonNum) {
  case 0:
    showName.innerHTML = `<p>${wizName}, you are ${houseList[0]}.</p>`;
    break;
  case 1:
    showName.innerHTML = `<p>${wizName}, you are ${houseList[1]}.</p>`;
    break;
  case 2:
    showName.innerHTML = `<p>${wizName}, you are ${houseList[2]}.</p>`;
    break;
  case 3:
    showName.innerHTML = `<p>${wizName}, you are ${houseList[3]}.</p>`;
    break;
}
// console.log(randonNum);
// console.log(houseList[getRandomNum(0, 3)]);
