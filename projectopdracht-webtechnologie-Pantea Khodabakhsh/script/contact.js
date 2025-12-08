"use strict";

let submitBtn = document.querySelector(".send-message");
let error = document.querySelector(".error");
let success = document.querySelector(".success");
let errorSuccess = document.querySelector(".errorSucces");

submitBtn.addEventListener("click", () => {
  let inputName = document.querySelector("#name").value;
  let inputEmail = document.querySelector("#email").value;
  let inputMessage = document.querySelector("#message").value;
  error.innerHTML = "";
  success.innerHTML = "";
  if (inputName === "") {
    let errorMessage = document.createElement("p");
    errorMessage.textContent = "Vul de naam alstublieft";
    error.appendChild(errorMessage);
  }
  if (inputEmail === "") {
    let errorMessage = document.createElement("p");
    errorMessage.textContent = "Vul de email alstublieft";
    error.appendChild(errorMessage);
  }
  if (inputMessage === "") {
    let errorMessage = document.createElement("p");
    errorMessage.textContent = "Vul de bericht alstublieft";
    error.appendChild(errorMessage);
  }
  if (inputName !== "" && inputEmail !== "" && inputMessage !== "") {
    let successMessage = document.createElement("p");
    successMessage.textContent = "Uw bericht werd ingestuurd!";
    success.appendChild(successMessage);
  }
});
