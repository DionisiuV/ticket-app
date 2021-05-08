const login = document.querySelector("#test-login");
const register = document.querySelector("#test-register");
const logout = document.querySelector("#test-logout");
const ticket = document.querySelector("#test-tickets");
const newTicket = document.querySelector("#test-newticket");
const loginContainer = document.querySelector("#container-login");
const registerContainer = document.querySelector("#container-register");
const ticketsContainer = document.querySelector("#container-tickets");
const newTicketContainer = document.querySelector("#container-newticket");

const data = [];
let isLogged = false;

// Check if isLogged
const getUser = async () => {
  try {
    await axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/api/user/user",
    }).then((res) => {
      const user = res.data.username;
      if (typeof user !== "undefined") {
        data.push(user);
        isLogged = true;
      }
    });
  } catch (err) {
    console.log(err);
  }
};

// Logout
logout.addEventListener("click", () => {
  axios({
    method: "GET",
    withCredentials: true,
    url: "http://localhost:4000/api/user/logout",
  }).then(() => {
    setTimeout(function () {
      window.location.replace("./");
    }, 500);
  });
});
