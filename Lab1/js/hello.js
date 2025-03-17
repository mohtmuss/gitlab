var today = new Date();
var hourNow = today.getHours();
var greeting;
if(hourNow > 18){
    greeting = 'Good evening';
}
else if(greeting > 12){
     greeting = 'Good afternoon';
}else if(greeting > 0 ){
    greeting = 'Good morning';
}else{
    greeting = 'Wellcome'
}
document.write("<br>");
 document.write(greeting);
 