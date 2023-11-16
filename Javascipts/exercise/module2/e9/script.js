const numList = [...Array(10).keys()];
//Aaray(5): create a array, inside will have a array with 5 empty items [[,,,,]]
// using spread or ... will flatten this array >> [,,,,]
//key() will return a array of key in array >> [0,1,2,3,4]
// Array(5).key => [[0,1,2,3,4]] >> [...Array(5).key] => [0,1,2,3,4]
const getEvenList = (numList) => {
  const evenList = numList.filter((number) => number % 2 === 0);
  return evenList;
};
console.log(numList);
const evenList = getEvenList(numList);
console.log(evenList);
