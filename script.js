// Select elements
const statusText = document.getElementById("statusText");
const toggleBtn = document.getElementById("toggleBtn");

// Variable to track ON / OFF state
let isOn = false;

// Button click event
toggleBtn.addEventListener("click", function () {
  if (isOn) {
    statusText.textContent = "OFF";
    isOn = false;
  } else {
    statusText.textContent = "ON";
    isOn = true;
  }
});