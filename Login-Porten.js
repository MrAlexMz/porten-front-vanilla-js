const loginButton = document.querySelector(".login-button");

loginButton.addEventListener("click", 
    function () {
        let userEmail = document.querySelector(".email-input-field input").value;
        let userPassword = document.querySelector(".password-input-field input").value;
        const users = JSON.parse(localStorage.getItem("users"));

        for (let i=0; i<users.length; i++) {
            if (users[i].email === userEmail && users[i].password === userPassword) {
                window.location.replace("Your-Account.html");
                break;
            }
            else if (users[i].email === userEmail && users[i].password !== userPassword) {
                document.querySelector(".error-wrong-password").hidden = false;
                document.querySelector(".error-wrong-email").hidden = true;
                break;
            }
            else if (users[i].email !== userEmail) {
                document.querySelector(".error-wrong-email").hidden = false;
                break;
            }
        }

        localStorage.setItem("users", JSON.stringify(users));
    }
);
