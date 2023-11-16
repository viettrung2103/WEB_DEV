const randomNumber = () => {
  const min = 1;
  const max = 6;
  const result = Math.floor(Math.random() * (max + 1 - min)) + min;
  // console.log(result);
  return result;
};
let numList = [];

let result = randomNumber();
while (result !== 6) {
  numList.push(result);
  result = randomNumber();
}

numList.forEach((number) => {
  const el = document.createElement("li");
  el.innerHTML = number;
  el.classList.add("dice-item");
  document.querySelector(".dice-list").appendChild(el);
});
