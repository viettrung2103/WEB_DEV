const number = 1;

const isPrime = (number) => {
  let dividentList = [];
  if (number <= 1) {
    return `${number} a not a prime number`;
  } else {
    for (let i = 2; i <= number; i++) {
      if (number % i == 0) {
        dividentList.push(number);
      }
    }
    if (dividentList.length > 1) {
      return `${number} is not a prime number`;
    } else {
      return `${number} is a prime number`;
    }
  }
};

const getNumber = () => {
  return +prompt("Type a number");
};

const main = () => {
  const number = getNumber();
  const result = isPrime(number);
  document.querySelector(".result").innerHTML = result;
};

main();
