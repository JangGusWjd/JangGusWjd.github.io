const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input:first-child");
const loginResult = document.querySelector("#login-result");
const logoutBt = document.querySelector("button");

function showLogin() {
  loginInput.value = "";
  localStorage.clear();
  logoutBt.classList.add("hidden");
  loginResult.classList.add("hidden");
  loginForm.classList.remove("hidden");
}

function showLogout() {
  logoutBt.classList.remove("hidden");
}

logoutBt.addEventListener("click", (e) => {
  alert("로그아웃하면 todo-list가 사라집니다. 로그아웃 하시겠습니까?");
  logoutBt.classList.remove("hidden");
  showLogin();
});

function login(e) {
  e.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add("hidden");
  localStorage.setItem("name", username);
  showUser(username);
  showLogout();
}

function showUser(username) {
  loginResult.classList.remove("hidden");
  loginResult.innerHTML = `Hello! ${username}`;
  // const welcomeImg = document.createElement("img");
  // welcomeImg.setAttribute(
  //   "src",
  //   "https://cdn.crowdpic.net/detail-thumb/thumb_d_E873445B05DF7F0F92B5F00F7493226F.png"
  // );
  // welcomeImg.setAttribute("width", "100%");
  // welcomeImg.setAttribute("height", "70%");
  // loginResult.appendChild(welcomeImg);
}

const savedUsername = localStorage.getItem("name");

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", login);
} else {
  showUser(savedUsername);
  showLogout();
}
