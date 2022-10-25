import {login} from "../../scripts/api.js"

const emailInput = document.getElementById("email-login");
const passwordInput = document.getElementById("password-login");
const registerBtn = document.getElementById("assign");
const accessBtn = document.getElementById("access");
let token = localStorage.getItem("token")
localStorage.removeItem("token")

accessBtn.addEventListener("click", async (e) =>{
e.preventDefault()
  const submit = {
    email: `${emailInput.value}`,
    password: `${passwordInput.value}`
  }
  
  const req = await login(submit);
  
  if(req.message){
    passwordInput.insertAdjacentHTML('afterend', `<p class="alert">${req.message}<p>`)
    passwordInput.classList.remove("input")
    passwordInput.classList.add("input-alert")
} else {
  localStorage.setItem("token",`${req.token}`)
  window.location.assign("/pages/home.html")}
})

registerBtn.addEventListener("click", (e) => {
  e.preventDefault()
  console.log(registerBtn)
  window.location.assign("/pages/register/register.html")
})

passwordInput.addEventListener("keyup", (input) => {
if(input.target.value !== "" && emailInput.value !== ""){
  passwordInput.classList.remove("input-alert")
  passwordInput.classList.add("input")
  accessBtn.classList.add("on-btn");
      accessBtn.disabled = false;
} else {
  accessBtn.classList.remove("on-btn");
  accessBtn.disabled = true;
}
}
)
