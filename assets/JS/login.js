//1.Get ID
const email = document.getElementById("email")
const password = document.getElementById("password")
const remember = document.getElementById("remember")
const sign = document.getElementById("sign-in")

//2.Give Pattern
const Validemail = (email) => {
    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailpattern.test(email)
}
const Validpassword = (password) => {
    const passwordpattern = /^(?=.*[A-Za-z])(?=.*\d).{5,}$/;
    return passwordpattern.test(password)
}
//3.Show and Hide Error 
const show = (element, valid, errorElement, message) => {
    if (valid) {
        element.classList.add("input-success");
        element.classList.remove("input-error");
        errorElement.style.display = "none";
    }
    else {
        element.classList.remove("input-success");
        element.classList.add("input-error");
        errorElement.innerText = message;
        errorElement.style.display = "block"
    }
}

4.//Blur Function
email.addEventListener("blur", () => {
    const emailtest = Validemail(email.value.trim());
    show(email, emailtest, document.getElementById("email-error"), "Ivalid Email")
});
password.addEventListener("blur", () => {
    const passwordpattern = Validpassword(password.value.trim());
    show(password, passwordpattern, document.getElementById("password-error"), "Invalid Password")
});

//Final checking Function
const verify = (num) => {
    num.preventDefault();
    const emailtest = Validemail(email.value.trim());
    const passwordtest = Validpassword(password.value.trim());

    if (!emailtest || !passwordtest) {
        if (!emailtest) show(email, false, document.getElementById("email-error"), "Email Required");
        if (!passwordtest) show(password, false, document.getElementById("password-error"), "Password Required")
        return;
    }
    localStorage.setItem("user_email", email.value.trim())
    alert("Login Successfully")

    email.value = ""
    password.value = ""
    remember.checked = false

    email.classList.remove("input-success");
    password.classList.remove("input-success");

    document.getElementById("email-error").style.display="none";
    document.getElementById("password-error").style.display="none"


}
//Remember me
document.getElementById("remember").addEventListener("change", function () {
    const user_email = localStorage.getItem("user_email");
    if (this.checked && user_email) {
        document.getElementById("email").value = user_email
    }
    else if (!this.checked) {
        document.getElementById("email").value = ""
    }

})
//Refresh page 
window.onload = () => {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("remember").checked = false;
}
sign.addEventListener("click", verify);
