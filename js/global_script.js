"use strict";

const loginButton             = document.getElementById("loginButton");

const loginBackground         = document.getElementById("loginBackground");
const loginCloseButton        = document.getElementById("loginCloseButton");
const loginBox                = document.getElementById("loginBox");

loginButton.onclick = function() {
    loginBackground.style.display = "flex";

    setTimeout(function() {
        loginBox.className = "login-box-active";
    }, 400);
};

loginCloseButton.onclick = function() {
    loginBox.className = "login-box-inactive";
};