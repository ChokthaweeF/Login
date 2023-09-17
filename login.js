document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const messageDiv = document.getElementById("message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        if (username === "student01" && password === "1234") {
            alert("Your username and password are correct! you are logged in.");
        } else {
            alert("Your username or password is incorrect! please try again.");
        }
    });
});