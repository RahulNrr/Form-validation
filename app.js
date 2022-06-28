let valid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
let id = (id) => {
    return document.getElementById(id);
}

let classes = (classes) => {
    return document.getElementsByClassName(classes);
}


username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = classes("error"),
    succesIcons = classes("success-icon"),
    failureIcon = classes("failure-icon");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (username.value === '') {
        errorMsg[0].innerHTML = "username can not be blank";
        failureIcon[0].style.opacity = "1";
        succesIcons[0].style.opacity = "0";
    } else {
        errorMsg[0].innerHTML = "";
        failureIcon[0].style.opacity = "0";
        succesIcons[0].style.opacity = "1";
    }
    if (email.value === '') {
        errorMsg[1].innerHTML = "email can not be blank";
        failureIcon[1].style.opacity = "1";
        succesIcons[1].style.opacity = "0";
    } else {
        errorMsg[1].innerHTML = "";
        failureIcon[1].style.opacity = "0";
        succesIcons[1].style.opacity = "1";
    }
    if (password.value === '') {
        errorMsg[2].innerHTML = "password can not be blank";
        failureIcon[2].style.opacity = "1";
        succesIcons[2].style.opacity = "0";
    } else if (password.value.match(valid)) {
        errorMsg[2].innerHTML = "";
        failureIcon[2].style.opacity = "0";
        succesIcons[2].style.opacity = "1";
    } else {
        errorMsg[2].innerHTML = "8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
        failureIcon[2].style.opacity = "1";
        succesIcons[2].style.opacity = "0";
    }

});

