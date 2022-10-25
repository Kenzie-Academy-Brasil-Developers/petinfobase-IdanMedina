const backToLoginBtn = document.getElementById("go-back-to-login");

backToLoginBtn.addEventListener("click", (e) =>{
e.preventDefault()
window.location.assign("/index.html")
})