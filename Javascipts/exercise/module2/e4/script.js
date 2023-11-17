// number = +prompt("Enter number");
"strict mode";

const createNumList = () => {
  let numberList = [];
  do {
    number = +prompt("Enter number");
    numberList.push(number);
  } while (number !== 0);
  return numberList;
};
let numberList = createNumList();
numberList.sort((a, b) => b - a);
numberList.forEach((number) => console.log(number));
