const stringList = ["Johny", "DeeDee", "Joey", "Marky"];

const concat = (stringList) => {
  let resultString = "";
  for (let i = 0; i < stringList.length; i++) {
    resultString += stringList[i];
  }
  return resultString;
};

const result = concat(stringList);
document.querySelector(".result").innerHTML = result;
