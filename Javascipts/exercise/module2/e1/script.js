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
let numberList = [];
console.log(numberList.length);
const getReverseList = (numberList) => {
  let reversedList = [];
  if (numberList != []) {
    // let biggest = numberList[0];
    while (numberList.length > 0) {
      // console.log(`number List: ${numberList}`);
      let biggest = numberList[0];
      let indexToRemove = 0;
      for (let i = 0; i < numList.length; i++) {
        if (numList[i] < biggest) {
          // do nothing
        } else {
          biggest = numList[i];
          indexToRemove = i;
        }

        //find the biggest number in the list
        // remove the number  from the old list  by finding its index
        // add the newly found biggest number to new list
      }
      numList.splice(indexToRemove, 1);
      reversedList.push(biggest);
      // console.log(`reversed list: ${reversedList}`);
    }
  }
  return reversedList;
};

const numList = getNumberList();
// console.log(numList);

const reversedList = getReverseList(numList);
// console.log(numList);
reversedList.forEach((currentNumber) => console.log(currentNumber));
