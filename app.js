/* Create by Tivotal */

const passInput = document.querySelector(".password-box input");
const copyIcon = document.querySelector(".copy-icon");
const rangeInput = document.querySelector(".range-box input");
const rangeNum = document.querySelector(".range-num");
const btn = document.querySelector(".btn");

let allChar =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~";

//function to generate password
const generatePassword = () => {
  let newPass = "";

  //this loop will run till the range input value
  for (let i = 0; i < rangeInput.value; i++) {
    let randomNums = Math.floor(Math.random() * allChar.length);
    newPass += allChar[randomNums];
  }

  passInput.value = newPass;
  copyIcon.classList.replace("fa-clipboard", "fa-clipboard-check");
};

//function for range input value change
rangeInput.addEventListener("input", () => {
  rangeNum.innerText = rangeInput.value;
  generatePassword();
  //it will generate new password everytime the range value changes
});

//function to copy the password to clipboard
copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(passInput.value);
  copyIcon.classList.replace("fa-clipboard-check", "fa-clipboard");
});

generatePassword();
btn.addEventListener("click", generatePassword);
