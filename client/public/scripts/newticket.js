// UI Variables
const ticketTitleInput = document.querySelector("#ticketTitle-input");
const selectDepartament = document.querySelector("#select-departament");
const selectPriority = document.querySelector("#select-priority");
const uploadFileBtn = document.querySelector("#uploadFile-btn");
const textAreaInput = document.querySelector("#textArea-input");
const sendTicketBtn = document.querySelector("#sendTicket-btn");
const notificationAlert = document.querySelector("#notification-alert");

sendTicketBtn.addEventListener("click", () => {
  if (ticketTitleInput.value === "" || selectDepartament.value === "") {
    notificationAlert.classList.toggle("hidden");
    setTimeout(() => {
      notificationAlert.classList.toggle("hidden");
    }, 3000);
  } else {
    console.log(window.location.replace("tickets.html"));
  }
});
