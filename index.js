function updateTime() {
  //create new date object
  var date = new Date();

  //get day
  var days = new Array(7);
  days[0] = "Sun";
  days[1] = "Mon";
  days[2] = "Tue";
  days[3] = "Wed";
  days[4] = "Thu";
  days[5] = "Fri";
  days[6] = "Sat";
  var day = days[date.getDay()];

  //get month
  var months = new Array(12);
  months[0] = "Jan";
  months[1] = "Feb";
  months[2] = "Mar";
  months[3] = "Apr";
  months[4] = "May";
  months[5] = "Jun";
  months[6] = "Jul";
  months[7] = "Aug";
  months[8] = "Sep";
  months[9] = "Oct";
  months[10] = "Nov";
  months[11] = "Dec";
  var month = months[date.getMonth()];

  //get hours
  var original_hour = date.getHours();

  //get 12 format hours
  var hour = original_hour % 12;

  //get am/pm
  var meridian = original_hour >= 12 ? "pm" : "am";

  //get minutes
  var min = date.getMinutes();

  //get seconds
  var sec = date.getSeconds();

  //get date
  var date_no = date.getUTCDate();

  //get year
  var year = date.getFullYear();

  //adding 0 before single digit
  min = min < 10 ? "0" + min : min;
  hour = hour < 10 ? "0" + hour : hour;
  sec = sec < 10 ? "0" + sec : sec;

  setTime(hour, min, sec, meridian, day, date_no, month, year);
}

function setTime(hour, min, sec, meridian, day, date_no, month, year) {
  document.getElementById("meridian").innerHTML = meridian;
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;
  document.getElementById("day").innerHTML = day;
  document.getElementById("date").innerHTML = date_no + " " + month;
  document.getElementById("year").innerHTML = year;
}

//call update time function
window.onload = function () {
  updateTime();
  setInterval(function () {
    updateTime();
  }, 1000);
};
