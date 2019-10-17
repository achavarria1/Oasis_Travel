// // Set the date we're counting down to
// var countDownDate = new Date("Oct 15, 2030 20:40:25").getTime();

// // Update the count down every 1 second
// var countdownfunction = setInterval(function() {

//   // Get todays date and time
//   var now = new Date().getTime();
  
//   // Find the distance between now an the count down date
//   var distance = countDownDate - now;
  
//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
//   // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
  
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(countdownfunction);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);




// function startTime() {
//   var today = new Date();
//   var h = today.getHours();
//   var m = today.getMinutes();
//   var s = today.getSeconds();
//   // add a zero in front of numbers<10
//   m = checkTime(m);
//   s = checkTime(s);
//   document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
//   var t = setTimeout(function(){ startTime() }, 500);
// }

// function checkTime(i) {
//   if (i < 10) {
//     i = "0" + i;
//   }
//   return i;
// }




// var timeleft = 10;
//     var downloadTimer = setInterval(function(){
//     timeleft--;
//     document.getElementById("countdowntimer").textContent = timeleft;
//     if(timeleft <= 0)
//         clearInterval(downloadTimer);
//     },1000);

var upgradeTime = 172801;
var seconds = upgradeTime;
function timer() {
  var days        = Math.floor(seconds/24/60/60);
  var hoursLeft   = Math.floor((seconds) - (days*86400));
  var hours       = Math.floor(hoursLeft/3600);
  var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
  var minutes     = Math.floor(minutesLeft/60);
  var remainingSeconds = seconds % 60;
  function pad(n) {
    return (n < 10 ? "0" + n : n);
  }
  document.getElementById('countdown').innerHTML = pad(days) + ":" + pad(hours) + ":" + pad(minutes) + ":" + pad(remainingSeconds);
  if (seconds == 0) {
    clearInterval(countdownTimer);
    document.getElementById('countdown').innerHTML = "Completed";
  } else {
    seconds--;
  }
}
var countdownTimer = setInterval('timer()', 1000);