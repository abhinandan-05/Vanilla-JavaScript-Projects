const clock = document.getElementById("clock");
const text = document.getElementById("time");

const updateTime = () => {
  const currentTime = new Date();

  const timeString = currentTime.toLocaleTimeString();

  text.textContent = timeString;
};

updateTime();
setInterval(updateTime, 3000);
