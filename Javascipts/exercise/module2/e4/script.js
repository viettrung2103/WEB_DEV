number = +prompt("Enter number");
let numberList = [];
while (number !== 0) {
  numberList.push(number);

  number = +prompt("Enter number");
}
numberList.sort((a, b) => b > a);
console.log(numberList);
