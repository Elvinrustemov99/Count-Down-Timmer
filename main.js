const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newYear = '01 Jan 2023';
function countDown (){
  const newYearDate = new Date(newYear);
  const currentDate = new Date(); // Default deyer yani hazirki gun saat deqiqe saniye

  const totalSecond = new Date(newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSecond / 3600 / 24);
  const hours = Math.floor(totalSecond / 360) % 24;
  const minute = Math.floor(totalSecond / 60) % 60;
  const second = Math.floor(totalSecond % 60); 

  // user terefine yazdirmaq
  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minuteEl.innerHTML = formatTime(minute);
  secondEl.innerHTML = formatTime(second);
}

function formatTime(time){
  return time < 10 ? `0${time}`: time;
}
countDown();
setInterval(countDown, 1000)