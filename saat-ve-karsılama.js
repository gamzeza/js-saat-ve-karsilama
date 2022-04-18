var name = prompt("Adınızı Giriniz : ");
document.getElementById('myName').innerHTML = name;


setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let day = time.getDay();
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    if (day == 1) {
        day = " Monday"
    } else if (day == 2) {
        day = " Tuesday"
    } else if (day == 3) {
        day = " Wednesday"
    } else if (day == 4) {
        day = " Thursday"
    } else if (day == 5) {
        day = " Friday"
    } else if (day == 6) {
        day = " Saturday"
    } else {
        day = " Sunday"
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    

    let currentTime = hour + ":" + min + ":" + sec + am_pm + day;
  
    document.getElementById("myClock").innerHTML = currentTime;
}
showTime();