"strict mode";

// const numOfCandidate = +prompt("How many candidates?");
// let i = 1;
// let candidateList = [];
// while (i <= numOfCandidate) {
//   const initial = 0;
//   const candidatename = prompt(`Name of candidate ${i}`);
//   candidateObj = { name: candidatename, votes: initial };
//   candidateList.push(candidateObj);
//   i++;
// }

const getNumberOfPeople = (name) => {
  return +prompt(`How many ${name}s`);
};

const createCandidateList = (numberOfCandidate) => {
  let i = 1;
  let candidateList = [];
  while (i <= numberOfCandidate) {
    const initial = 0;
    const candidatename = prompt(`Name of candidate: ${i}`).toLowerCase();
    candidateObj = { name: candidatename, votes: initial };
    candidateList.push(candidateObj);
    i++;
  }
  return candidateList;
};

const getCandidateName = () => {
  return prompt("Who do you to vote to?");
};

const getCandidateNameList = (list) => {
  return list.map((candidateObject) => candidateObject["name"]);
};

// let candidateList = [];
// const isExist = (candidateName, candidateList) => {
//   const isExist = candidateList.includes(candidateName)
//   if (isExist) {
//     const index =
//   }
//   return candidateList.includes(candidateName);
// };

const voteCount = (candidatename, candidateList) => {
  if (candidatename != "") {
    for (objectCandidate of candidateList) {
      if (candidatename === objectCandidate["name"]) {
        objectCandidate["votes"]++;
      }
    }
  } else {
    console.log(
      "The person that you want to vote is not in the list of candidate"
    );
  }

  return candidateList;
};

const sorting = (candidateList) => {
  candidateList.sort((a, b) => b > a);
  return;
};

const result = (candidateList) => {
  sorting(candidateList);
  // console.log(candidateList[0]);
  const winner = candidateList[0];
  console.log(`Winner is ${winner["name"]} with ${winner["votes"]} votes.`);
  return;
};

const showfinalList = (candidateList) => {
  console.log(`Result:`);
  for (obj of candidateList) {
    console.log(
      `${obj["name"]}: ${obj["votes"]} vote${obj["votes"] > 1 ? "s" : ""}`
    );
  }
  return;
};

const initialState = () => {
  const candidate = "candidate";
  const voter = "voter";
  const numOfCandidate = getNumberOfPeople(candidate);
  // console.log(`candidate List: ${numOfCandidate}`);
  let candidateList = createCandidateList(numOfCandidate);
  // console.log(candidateList);
  // console.log(...candidateList);
  // for (obj of candidateList) {
  //   console.log(obj["name"]);
  //   for (value in obj) {
  //     console.log(`${value}: ${obj[value]}`);
  //   }
  // }
  // console.log(candidateList);

  const numOfVoter = getNumberOfPeople(voter);
  // consol;
  for (let i = 1; i <= numOfVoter; i++) {
    const candidateName = getCandidateName().toLowerCase();
    console.log(`You have vote: ${candidateName}`);
    candidateList = voteCount(candidateName, candidateList);
  }
  result(candidateList);
  showfinalList(candidateList);
};

initialState();
