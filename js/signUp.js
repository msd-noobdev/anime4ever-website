import { validateInput } from "./funcs/validation.js";

const checkBoxTerms = $.getElementById("terms");
const signUpSubmit = $.querySelector(".sign-up-submit");
const signupName = $.querySelector(".signup__name-inp");
const signupEmail = $.querySelector(".signup__email-inp");
const signupPassword = $.querySelector(".signup__pass-inp");
const signupRePass = $.querySelector(".signup__repass-inp");
const signupNameErr = $.querySelector(".signup__name-inp-err");
const signupEmailErr = $.querySelector(".signup__email-inp-err");
const signupPasswordErr = $.querySelector(".signup__pass-inp-err");
const signupRePassErr = $.querySelector(".signup__repass-inp-err");

let validName = false;
let validEmail = false;
let validPass = false;
let validRePass = false;

const nameRegex = /^([A-Za-z]{3,})(\s{1}[A-Za-z]{3,})+$/;
const emailRegex = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,3})+$/;
const passRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

signupName.addEventListener("keyup", () => {
  validName = validateInput(signupName, nameRegex, signupNameErr);
  activeSignupButton();
});

signupEmail.addEventListener("keyup", () => {
  validEmail = validateInput(signupEmail, emailRegex, signupEmailErr);
  activeSignupButton();
});

signupPassword.addEventListener("keyup", () => {
  validPass = validateInput(signupPassword, passRegex, signupPasswordErr);
  activeSignupButton();
});

signupRePass.addEventListener("keyup", () => {
  if (signupPassword.value === signupRePass.value) {
    signupRePassErr.classList.add("d-none");
    validRePass = true;
  } else {
    signupRePassErr.classList.remove("d-none");
    validRePass = false;
  }
  activeSignupButton();
});

// SIGN UP INPUT WILL ACTIVE OR INACTIVE WHILE CLICK ON CHECKBOX TERMS AND CONDITIONS
checkBoxTerms.addEventListener("click", () => activeSignupButton());

const activeSignupButton = () => {
  if (
    checkBoxTerms.checked &&
    validName &&
    validEmail &&
    validPass &&
    validRePass
  ) {
    signUpSubmit.disabled = false;
    signUpSubmit.classList.remove("input-submit-disabled");
  } else {
    signUpSubmit.disabled = true;
    signUpSubmit.classList.add("input-submit-disabled");
  }
};
