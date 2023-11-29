const textArray = ["First item", "Second item", "Third item"];

const ul = document.querySelector("#target");

const createListItem = (stringItem) => {
  const listItem = document.createElement("li");
  listItem.classList = "list-item";
  listItem.textContent = stringItem;
  ul.appendChild(listItem);
};

const listItemDisplay = () => {
  textArray.forEach((currentString) => createListItem(currentString));
};

listItemDisplay();
ul.classList = "my-list";
