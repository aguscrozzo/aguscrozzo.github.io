function updateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Add leading zeros if necessary
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // Display the formatted time
  var clockElement = document.getElementById("clock");
  clockElement.textContent = hours + ":" + minutes + ":" + seconds;
}

// Update the time every second
setInterval(updateTime, 1000);
