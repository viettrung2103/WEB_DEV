const getFacesForDice = () => {
  return +prompt("How many faces does your dice have?");
};

const randomNumber = (faces) => {
  const min = 1;
  const max = faces;
  const result = Math.floor(Math.random() * (max + 1 - min)) + min;
  // console.log(result);
  return result;
};

// let numList = [];

const rolling = (faces) => {
  let numList = [];
  let result = randomNumber(faces);
  do {
    result = randomNumber(faces);
    numList.push(result);
  } while (result !== faces);
  return numList;
};

const displayList = (numberList) => {
  numberList.forEach((number) => {
    const el = document.createElement("li");
    el.innerHTML = number;
    el.classList.add("dice-item");
    document.querySelector(".dice-list").appendChild(el);
  });
  return;
};

const main = () => {
  // let numberList = [];
  const faces = getFacesForDice();
  console.log(faces);
  const numberList = rolling(faces);
  console.log(numberList);
  displayList(numberList);
};

main();
