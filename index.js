function updateTime() {
  var days  = new Array(7);  
  days[0] = "Sun";
  days[1] = "Mon";
  days[2] = "Tue";
  days[3] = "Wed";
  days[4] = "Thu";
  days[5] = "Fri";
  days[6] = "Sat";
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
  var date = new Date();
  var hour = date.getHours();
  var meridian = hour >= 12 ? "pm" : "am";
  hour = hour % 12;
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var day = days[date.getDay()];
  var date_no = date.getUTCDate()
  var month = months[date.getMonth()];
  var year  = date.getFullYear();
  min = min < 10 ? "0" + min : min;
  hour = hour < 10 ? "0" + hour : hour;
  sec = sec < 10 ? "0" + sec : sec;
  setTime(hour, min, sec, meridian, day, date_no, month, year);
}

function setTime(hour, min, sec, meridian, day, date_no, month, year){
    document.getElementById('meridian').innerHTML = meridian;
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
    document.getElementById('day').innerHTML = day;
    document.getElementById('date').innerHTML = date_no + ' ' + month;
    document.getElementById('year').innerHTML = year;
}

window.onload = setInterval(function(){ updateTime(); }, 1000);