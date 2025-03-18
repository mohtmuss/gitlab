
var today = new Date();
var hourNow = today.getHours();
var minutesNow = today.getMinutes();
var secondsNow = today.getSeconds();
var greeting;


if (hourNow > 18) {
    greeting = 'Good evening';
} else if (hourNow > 12) {
    greeting = 'Good afternoon';
} else if (hourNow > 0) {
    greeting = 'Good morning';
} else {
    greeting = 'Welcome';
}


document.write(greeting);
document.write("<br>"); 


document.write("Current time: " + hourNow + ":" + minutesNow + ":" + secondsNow);
