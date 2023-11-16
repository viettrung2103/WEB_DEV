const userName = prompt("What is your name? ");
console.log(userName);

const showUser = document.querySelector("#userName");
const text = `<p>Hello ${userName}</p>`;
// console.log(text);
showUser.innerHTML = text;
// console.log(showUser);
