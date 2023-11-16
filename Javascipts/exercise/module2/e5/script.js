let numList = [];
let isFound = false;

const repeat = (number) => {
  return numList.includes(number);
};


let number = +prompt("Please type a number");
// numList.push(number)
while (!isFound) {
  numList.push(number);
  number = +prompt("Please type a number");
  isFound = repeat(number);
}

numList.sort((a, b) => a > b);
console.log(numList);
