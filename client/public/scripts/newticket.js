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
    axios({
      method: "POST",
      data: {
        title: ticketTitleInput.value,
        user: data[0],
        Department:
          selectDepartament.options[selectDepartament.selectedIndex].text,
        priority: selectPriority.options[selectPriority.selectedIndex].text,
        ticketDetails: textAreaInput.value,
      },
      withCredentials: true,
      url: "http://localhost:4000/api/ticket/",
    }).then((res) => console.log(res));
    console.log(window.location.replace("tickets.html"));
  }
});

window.onload = async () => {
  await getUser();
  if (isLogged) {
    newTicket.style.display = "block";
    ticket.style.display = "block";
    logout.style.display = "block";
    newTicketContainer.style.display = "block";
  } else {
    login.style.display = "block";
    register.style.display = "block";
  }
};
