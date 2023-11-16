const count = 6;
let i = 1;
let dogList = [];
while (i <= 6) {
  const dog = prompt("Type dog name: ");
  dogList.push(dog);
  i++;
}

dogList.sort((a, b) => b > a);

dogList.forEach((dog) => {
  const el = document.createElement("li");
  el.innerHTML = dog;
  document.querySelector(".dog-list").appendChild(el);
});
console.log(dogList);
