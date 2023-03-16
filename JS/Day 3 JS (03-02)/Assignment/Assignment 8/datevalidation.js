function isValidDate() {
  let date = document.getElementById("date").value;
  date = date.split("/");
  const month = date[0];
  const day = date[1];
  const year = date[2];
  if (date.length != 3) {
    document.getElementById("output").innerHTML =
      "Invalid date. Please enter date in MM/DD/YYYY format";
  } else if (isNaN(date[2])) {
    document.getElementById("output").innerHTML =
      "Invalid year.Year should be in number.";
  } else if (isNaN(date[1])) {
    document.getElementById("output").innerHTML =
      "Invalid day.Day should be in number.";
  } else if ("01" > date[0] || date[0] > "12") {
    document.getElementById("output").innerHTML =
      "Invalid month. Month should be within the range 1 to 12";
  } else {
    let leapYear = false;
    document.getElementById("output").innerHTML = "";
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      leapYear = true;
    }
    if (
      month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 12
    ) {
      if (!(1 <= day && day <= 31)) {
        document.getElementById("output").innerHTML =
          "Invalid day.Days should be within the range 1 to 31.";
      }
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
      if (!(1 <= day && day <= 30)) {
        document.getElementById("output").innerHTML =
          "Invalid day. Day should be within the range 1 to 30";
      }
    } else if (month == 2) {
      if (leapYear) {
        if (!(1 <= day && day <= 29)) {
          document.getElementById("output").innerHTML =
            "Invalid day. Day should be within the range 1 to 29";
        }
      } else {
        if (!(1 <= day && day <= 28)) {
          document.getElementById("output").innerHTML =
            "Invalid day. Day should be within the range 1 to 28";
        }
      }
    }
  }
  let errMsg = document.getElementById("output").innerHTML;
  if (errMsg == "") {
    document.getElementById(
      "output"
    ).innerHTML = `You have entered valid date. Its ${+month}/${+day}/${+year}. Thank you.`;
    document.getElementById("output").style.color = "green";
  } else {
    document.getElementById("output").style.color = "red";
  }
}
