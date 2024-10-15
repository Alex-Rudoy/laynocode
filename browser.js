const checkLeapYear = (year) => console.log(!!(+new Date(year, 1, 29) ^ +new Date(year, 2, 1)));
