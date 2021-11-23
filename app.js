let id = (id) => {
    return document.getElementById(id);
}

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    // errorMsg = document.getElementsByClassName("error"),
    // succesIcon = document.getElementsByClassName("success-icon"),
    // failureIcon = document.getElementsByClassName("failure-icon");
    form = id("form"),
    errorMsg = classes("error"),
    succesIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

// errorMsg = ['error', 'error', 'error'];

// errorMsg[0].innerHTML = "ryryrur";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // if (username.value === '') {
    //     errorMsg[0].innerHTML = "Username can not be blank";
    //     failureIcon[0].style.opacity = "1";
    //     succesIcon[0].style.opacity = "0";
    // } else {
    //     errorMsg[0].innerHTML = "";
    //     failureIcon[0].style.opacity = "0";
    //     succesIcon[0].style.opacity = "1";
    // }
    engine(username, 0, "Username can not be blank");
    engine(email, 1, "Email can not be blank");
    engine(password, 2, "Password can not be blank");
    // errorMsg[2].innerHTML = "Here we need correct password";
});
// if we don't wanseriala repeat the same code, thats why we need 'engine'
let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = "1";
        succesIcon[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = "";
        failureIcon[serial].style.opacity = "0";
        succesIcon[serial].style.opacity = "1";
    }
};