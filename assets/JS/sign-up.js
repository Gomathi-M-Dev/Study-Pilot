const Firstname = document.getElementById("First-Name")
const Lastname = document.getElementById("Last-Name")
const Email = document.getElementById("email")
const Password = document.getElementById("password")
const Confirm = document.getElementById("Confirm-Password")
const checkbox = document.getElementById("terms")
const signup = document.getElementById("sign-up")

const firstname = (Fname) => {
    const Fpattern = /^[A-Za-z\s]{3,}$/;
    return Fpattern.test(Fname)
}
const lastname = (Lname) => {
    const Lpattern = /^[A-Za-z\s]{1,}$/;
    return Lpattern.test(Lname)
}
const Validemail = (email) => {
    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailpattern.test(email)
}
const Validpassword = (password) => {
    const passwordpattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
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

//blur function
Firstname.addEventListener("blur", () => {
    const Fnametest = firstname(Firstname.value.trim());
    show(Firstname, Fnametest, document.getElementById("fname-error"), "Invalid Name")
});
Lastname.addEventListener("blur", () => {
    const Lnametest = lastname(Lastname.value.trim());
    show(Lastname, Lnametest, document.getElementById("lname-error"), "Invalid Name")
});
Email.addEventListener("blur", () => {
    const Emailtest = Validemail(Email.value.trim());
    show(Email, Emailtest, document.getElementById("email-error"), "Invalid Email")

});
Password.addEventListener("blur", () => {
    const Passwordtest = Validpassword(Password.value.trim());
    show(Password, Passwordtest, document.getElementById("password-error"), "Invalid Password")

})

const Validname = (name) => {
    name.preventDefault();
    const Fnametest = firstname(Firstname.value.trim());
    const Lnametest = lastname(Lastname.value.trim());
    const Emailtest = Validemail(Email.value.trim());
    const Passwordtest = Validpassword(Password.value.trim());
    const confirmtest = Confirm.value.trim()

    if (!Fnametest || !Lnametest || !Emailtest || !Passwordtest) {
        if (!Fnametest) show(Firstname, false, document.getElementById("fname-error"), "Name Required");
        if (!Lnametest) show(Lastname, false, document.getElementById("lname-error"), "Name Required");
        if (!Emailtest) show(Email, false, document.getElementById("email-error"), "Email Required");
        if (!Passwordtest) show(Password, false, document.getElementById("password-error"), "Password Required");
        return;
    }
    alert("Successfull")

}


signup.addEventListener("click", Validname)