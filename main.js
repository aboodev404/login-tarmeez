const showPassword = document.querySelector("#show-password");
const password = document.querySelector("#password");

showPassword.addEventListener("click", function(){
    // this.classList.toggle("fa-solid fa-eye-slash");
    if(password.type === "password") {
        showPassword.setAttribute("class", "fa-solid fa-eye-slash");
    } else {
        showPassword.setAttribute("class", "fa-solid fa-eye");
    }
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type",type);
})