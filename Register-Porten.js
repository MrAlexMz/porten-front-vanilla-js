const registerButton = document.querySelector(".register-button");

function init() {
    if(!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify([]));
    }
}

init();

registerButton.addEventListener("click", 
    function () {
        let email = document.querySelector(".email-input-field input").value;
        let login = document.querySelector(".user-name-input-field input").value;
        let password = document.querySelector(".password-input-field input").value;
        console.log(email);
        console.log(login);
        console.log(password);

        const newUser = {
            'email': email,
            'login': login,
            'password': password
        };

        console.log('new user is ' + JSON.stringify(newUser));
        const users = JSON.parse(localStorage.getItem("users"));
        users.push(newUser);
        console.log('users with appended new user ' + JSON.stringify(users));
        localStorage.setItem("users", JSON.stringify(users));
    }
);