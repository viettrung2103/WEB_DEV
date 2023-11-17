const getDogList = () => {
  const count = 6;
  let i = 1;
  let dogList = [];
  while (i <= count) {
    const dog = prompt("Type dog name: ");
    dogList.push(dog);
    i++;
  }

  return dogList;
};

// string sort
const sortString = (a, b) => {
  let lowerA = a.toLowerCase();
  let lowerB = b.toLowerCase();
  if (lowerB > lowerA) {
    return 1;
  } else if (lowerB < lowerA) {
    return -1;
  } else {
    return 0;
  }
};

let dogList = getDogList();
// console.log(`original: ${dogList}`);
// dogList.sort();
// console.log(`first change ${dogList}`);
dogList.sort(sortString);
// console.log(`second change: ${dogList}`);
// console.log(newDogList);
dogList.forEach((dog) => {
  const el = document.createElement("li");
  el.innerHTML = dog;
  document.querySelector(".dog-list").appendChild(el);
});
console.log(newDogList);
