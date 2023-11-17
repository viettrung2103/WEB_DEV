// number = +prompt("Enter number");
let numberList = [];
do {
  number = +prompt("Enter number");
  numberList.push(number);
} while (number !== 0);
numberList.sort((a, b) => b > a);
numberList.forEach((number) => console.log(number));
