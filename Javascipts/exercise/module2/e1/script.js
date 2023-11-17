const getNumberList = () => {
  let count = 0;
  let numList = [];
  while (count < 5) {
    const number = +prompt("Type your number");
    numList.push(number);
    count++;
  }
  return numList;
};

const reverseList = (numList) => {
  // console.log(numList);
  numList.sort((a, b) => b > a);
  return;
};

const numList = getNumberList();
// console.log(numList);

reverseList(numList);
// console.log(numList);
numList.forEach((currentNumber) => console.log(currentNumber));
