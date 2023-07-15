
var countdownDate = new Date("28 Jul 2023 05:02 PM").getTime();
var x =setInterval(function(){
    var now =new Date().getTime();
    var distance = countdownDate-now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("days").innerText =days;
    document.getElementById("hours").innerText =hours;
    document.getElementById("mins").innerText =minutes;
    document.getElementById("secs").innerText =seconds;

    if(distance < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML ="00";
        document.getElementById("hours").innerHTML ="00";
        document.getElementById("mins").innerHTML ="00";
        document.getElementById("secs").innerHTML ="00";
    }

},1000);   




