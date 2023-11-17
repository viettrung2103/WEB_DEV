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
  }
  return candidateList;
};

const initialState = () => {
  const candidate = "candidate";
  const voter = "voter";
  const numOfCandidate = getNumberOfPeople(candidate);
  // console.log(`candidate List: ${numOfCandidate}`);
  let candidateList = createCandidateList(numOfCandidate);
  // console.log(candidateList);
  // console.log(...candidateList);
  for (obj of candidateList) {
    // console.log(obj["name"]);
    // for (value in obj) {
    //   console.log(`${value}: ${obj[value]}`);
    // }
  }
  // console.log(candidateList);

  const numOfVoter = getNumberOfPeople(voter);
  // consol;
  for (let i = 1; i <= numOfVoter; i++) {
    const candidateName = getCandidateName().toLowerCase();
    console.log(`You have vote: ${candidateName}`);
    candidateList = voteCount(candidateName, candidateList);
  }
  console.log(candidateList);
};

initialState();
