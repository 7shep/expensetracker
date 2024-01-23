// This event listener waits for the DOM (Document Object Model) to be fully loaded before executing the code inside.
document.addEventListener("DOMContentLoaded", () => {

    // Getting the 'register' button element from the DOM.
    const register = document.getElementById('register');

    // Adding a click event listener to the 'register' button.
    register.addEventListener("click", () => {
       // Preventing the default form submission behavior.
       event.preventDefault();

        // Getting the values from the username and password input fields.
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Checking if the username or password fields are empty.
        if(username == '' || password == '') {
            // Displaying an alert if either field is empty.
            alert("Invalid Username or Password.")
        } else {
            // Sending a POST request to the "/userlogin" endpoint with the username and password.
            fetch("/userlogin", {
                method: 'POST',
                body: JSON.stringify({
                    userName: username,
                    pswd: password
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
        }
    })

    // Getting the 'login' button element from the DOM.
    const login = document.getElementById('login');

    // Adding a click event listener to the 'login' button.
    login.addEventListener("click", () => {
        // Redirecting the user to the 'expense.html' page when the login button is clicked.
        window.location.href = 'expense.html';
    })
})
