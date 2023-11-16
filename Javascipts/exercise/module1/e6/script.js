"strict mode";
const isYes = confirm("Should I calculate the square root? ");
// console.log(answer);
const getNum = () => {
  const number = +prompt("Enter your number");
  return number;
};

const isNegative = (number) => {
  return number < 0;
};

const negaTiveResult = (number) => {
  if (isNegative(number)) {
    return "The square root of a negative number is not defined";
  }
};
const squareRoot = (number) => {
  if (isNegative(number)) {
    return negaTiveResult;
  } else {
    const result = Math.sqrt(number);
    return result;
  }
};

const main = () => {
  if (isYes) {
    const num = getNum();
    if (isNegative(num)) {
      const resultText = negaTiveResult(num);
      document.querySelector(".result").innerHTML = resultText;
    } else {
      const result = squareRoot(num).toFixed(2);
      console.log(result);
      const cursorNumber = document.querySelector(".number");
      const cursorResult = document.querySelector(".result");
      cursorNumber.innerHTML = `Your number is ${num}`;
      cursorResult.innerHTML = `The result is ${result}`;
    }
  } else {
    const cursorNumber = document.querySelector(".number");
    cursorNumber.innerHTML = "The square root is not calculated.";
  }
};

main();
