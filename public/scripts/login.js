// UI Variables
const userNameInput = document.querySelector("#username-input");
const passwordInput = document.querySelector("#password-input");
const notificationAlert = document.querySelector("#notification-alert");
const loginBtn = document.querySelector("#login-btn");

// Validation
// Listen for click event on login button
loginBtn.addEventListener("click", () => {
  if (userNameInput.value === "" || passwordInput.value === "") {
    notificationAlert.classList.toggle("hidden");
    setTimeout(() => {
      notificationAlert.classList.toggle("hidden");
    }, 3000);
  } else {
    console.log(window.location.replace("tickets.html"));
  }
});
