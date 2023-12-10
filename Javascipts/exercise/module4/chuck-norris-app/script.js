const API = " https://api.chucknorris.io/jokes/search?query=";
const PICNOTFOUNDURL = "https://via.placeholder.com/210x295?text=Not%20Found";

const getDataFromAPI = async (query) => {
  try {
    const response = await fetch(`${API}${query}`); //fetch response from request
    const jsonData = await response.json();
    // const value = jsonData[1];
    return jsonData;
  } catch (error) {
    // handle error
    console.log(error.message);
  }
};

const displayData = (data) => {
  const result = document.querySelector("#result");
  result.innerHTML = "";
  const dataContent = data["result"];
  // console.log(dataContent);
  dataContent.forEach((item) => {
    const p = document.createElement("p");
    // const img = document.createElement("img");

    p.innerText = item["value"];
    // img;
    // img.src = item["icon_url"];

    // result.appendChild(img);
    result.appendChild(p);
  });

  // })
  // p.innerText = data;

  // result.appendChild(p);
  return;
};

const handleClick = async (e) => {
  e.preventDefault();
  const query = document.querySelector("input[name=q]")["value"];
  const data = await getDataFromAPI(query);
  // const joke = data["value"];
  // console.log(data);
  displayData(data);
  return;
};

const searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleClick);
// handleClick();
