const count = prompt("How many participants?");
const userList = [];
let i = 1;
while (i <= count) {
  user = prompt("Enter user's name:");
  userList.push(user);
  i++;
}
console.log(userList);

userList.forEach((user) => {
  const el = document.createElement("li");
  el.innerHTML = user;
  document.querySelector(".name-list").appendChild(el);
});
