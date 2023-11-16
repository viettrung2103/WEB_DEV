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
  console.log(`star:${startYear},end: ${endYear}`);
  return [startYear, endYear];
};

const getYearList = (startYear, endYear) => {
  let yearList = [];
  if (startYear === 0 && endYear === 0) {
    return yearList;
  } else {
    for (let i = startYear; i <= endYear; i++) {
      yearList.push(i);
    }
    return yearList;
  }
};

const [startYear, endYear] = askStartAndEndYear();

const yearList = getYearList(startYear, endYear);

const leapYearList = yearList.filter(isLeapYear);

const main = () => {
  if (leapYearList.length != 0) {
    leapYearList.forEach((currentYear) => {
      // console.log(currentYear);
      const el = document.createElement("li");
      el.innerHTML = currentYear;
      document.querySelector(".year-list").appendChild(el);
    });
  } else {
    return;
  }
};

main();
