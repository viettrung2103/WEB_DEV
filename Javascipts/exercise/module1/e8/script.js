const isLeapYear = (year) => {
  if (year % 4 !== 0) {
    return false;
  } else {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 !== 0) {
      return true;
    } else {
      return false;
    }
  }
};

const askStartAndEndYear = () => {
  const startYear = +prompt("Type start year:");
  const endYear = +prompt("Type end year:");
  return [startYear, endYear];
};

const getYearList = (startYear, endYear) => {
  let yearList = [];
  for (let i = startYear; i <= endYear; i++) {
    yearList.push(i);
  }
  return yearList;
};

const [startYear, endYear] = askStartAndEndYear();

const yearList = getYearList(startYear, endYear);

const leapYearList = yearList.filter(isLeapYear);

const main = () => {
  leapYearList.forEach((currentYear) => {
    const el = document.createElement("li");
    el.innerHTML = currentYear;
    document.querySelector(".year-list").appendChild(el);
  });
};

main();
