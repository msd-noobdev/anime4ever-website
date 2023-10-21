const loginPassInput = $.querySelector("#login-pass input");
const loginPassInputIcon = $.querySelector(".login-pass-input-icon");

let loginPassType = "password";

// SHOW PASSWORD WHILE CLICK ON LOCK ICON FOR LOGIN PASSWORD INPUT
loginPassInputIcon.addEventListener("click", () => {
  loginPassType = loginPassType === "password" ? "text" : "password";
  loginPassInput.type = loginPassType;
  loginPassInputIcon.classList.toggle("fa-lock");
  loginPassInputIcon.classList.toggle("fa-unlock");
});