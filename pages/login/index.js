import {login} from "../../scripts/api.js"

const inputs = document.querySelectorAll("input");
const emailInput = document.getElementById("email-login");
const passwordInput = document.getElementById("password-login");
const accessBtn = document.getElementById("access");
 
accessBtn.addEventListener("click", async (e) =>{
e.preventDefault()
  const submit = {
    email: `${emailInput.value}`,
    password: `${passwordInput.value}`
  }
  console.log(submit)
  const token = await login(submit);
  localStorage.setItem("token",`${token.token}`)
  /* window.location.assign("/pages/register.html") */
})


passwordInput.addEventListener("keyup", (input) => {
if(input.target.value !== "" && emailInput.value !== ""){
  accessBtn.classList.add("on-btn");
      accessBtn.disabled = false;
} else {
  accessBtn.classList.remove("on-btn");
  accessBtn.disabled = true;
}
}
)
