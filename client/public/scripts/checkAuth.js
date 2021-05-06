const login = document.querySelector("#test-login");
const register = document.querySelector("#test-register");
const logout = document.querySelector("#test-logout");
const data = [];
let isLogged = false;

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

window.onload = async () => {
  await getUser();
  if (isLogged) {
    // window.location.replace("./tickets.html");
    logout.style.display = "block";
    login.style.display = "none";
    register.style.display = "none";
  }
};
