var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) greeting = 'Good evening';
else if (hourNow > 12) greeting = 'Good afternoon';
else if (hourNow > 0) greeting = 'Good morning';
else greeting = 'Welcome';
document.getElementById("javascriptenter").innerText = greeting;

//# sourceMappingURL=hello.7e048d94.js.map
