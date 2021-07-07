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

        const newUser = {
            'email': email,
            'login': login,
            'password': password
        };

        const users = JSON.parse(localStorage.getItem("users"));
        for (let i=0; i<users.length; i++) {
            if (users[i].email === newUser.email) {
                document.querySelector(".error-wrong-email").hidden = false;
                break;
            }
            else if (users[i].login === newUser.login) {
                document.querySelector(".error-wrong-name").hidden = false;
                document.querySelector(".error-wrong-email").hidden = true;
                break;
            }
            else if (i=users.length-1) {
                users.push(newUser);
                window.location.replace("Your-Account.html");
                break;
            }
        };
      
        localStorage.setItem("users", JSON.stringify(users));
    }
);