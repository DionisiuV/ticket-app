// UI Variables
const fullNameInput = document.querySelector("#fullName-input");
const selectDepartament = document.querySelector("#select-departament");
const emailInput = document.querySelector("#email-input");
const phoneNumberInput = document.querySelector("#phoneNumber-input");
const typePasswordInput = document.querySelector("#typePassword-input");
const retypePasswordInput = document.querySelector("#retypePassword-input");
const registerBtn = document.querySelector("#register-btn");
const notificationAlert = document.querySelector("#notification-alert");

//Validation
registerBtn.addEventListener("click", () => {
  if (
    fullNameInput.value === "" ||
    selectDepartament.value === "" ||
    emailInput.value === "" ||
    phoneNumberInput.value === "" ||
    typePasswordInput.value === "" ||
    retypePasswordInput.value === ""
  ) {
    notificationAlert.classList.toggle("hidden");
    setTimeout(() => {
      notificationAlert.classList.toggle("hidden");
    }, 3000);
  } else {
    console.log(window.location.replace("tickets.html"));
  }
});
