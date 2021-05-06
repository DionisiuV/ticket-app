// UI Variables
const userNameInput = document.querySelector("#username-input");
const passwordInput = document.querySelector("#password-input");
const notificationAlert = document.querySelector("#notification-alert");
const loginBtn = document.querySelector("#login-btn");

// Validation
// Listen for click event on login button
loginBtn.addEventListener("click", async () => {
  if (userNameInput.value === "" || passwordInput.value === "") {
    notificationAlert.classList.toggle("hidden");
    setTimeout(() => {
      notificationAlert.classList.toggle("hidden");
    }, 3000);
  } else {
    axios({
      method: "POST",
      data: {
        username: userNameInput.value,
        password: passwordInput.value,
      },
      withCredentials: true,
      url: "http://localhost:4000/api/user/login",
    }).then(async () => {
      isLogged = false;
      await getUser();
      if (isLogged) {
        window.location.replace("./tickets.html");
      } else {
        notificationAlert.classList.toggle("hidden");
        setTimeout(() => {
          notificationAlert.classList.toggle("hidden");
        }, 3000);
      }
    });
  }
});

// .then(window.location.replace("./tickets.html"))
