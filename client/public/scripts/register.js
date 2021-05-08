// UI Variables
const firstNameInput = document.querySelector("#firstName-input");
const selectDepartament = document.querySelector("#select-departament");
const emailInput = document.querySelector("#email-input");
const lastNameInput = document.querySelector("#lastName-input");
const typePasswordInput = document.querySelector("#typePassword-input");
const retypePasswordInput = document.querySelector("#retypePassword-input");
const registerBtn = document.querySelector("#register-btn");
const notificationAlert = document.querySelector("#notification-alert");

//Validation
registerBtn.addEventListener("click", () => {
  if (
    firstNameInput.value === "" ||
    selectDepartament.value === "" ||
    emailInput.value === "" ||
    lastNameInput.value === "" ||
    typePasswordInput.value === "" ||
    retypePasswordInput.value === ""
  ) {
    notificationAlert.classList.toggle("hidden");
    setTimeout(() => {
      notificationAlert.classList.toggle("hidden");
    }, 3000);
  } else {
    axios({
      method: "POST",
      data: {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        department:
          selectDepartament.options[selectDepartament.selectedIndex].text,
        username: emailInput.value,
        password: typePasswordInput.value,
      },
      withCredentials: true,
      url: "http://localhost:4000/api/user/",
    }).then((res) => console.log(res));

    // console.log(window.location.replace("tickets.html"));
  }
});

window.onload = async () => {
  await getUser();
  if (isLogged) {
    newTicket.style.display = "block";
    ticket.style.display = "block";
    logout.style.display = "block";
  } else {
    login.style.display = "block";
    register.style.display = "block";
    registerContainer.style.display = "block";
  }
};
