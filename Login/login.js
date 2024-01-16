document.addEventListener('DOMContentLoaded', function() {
    // This function will make a POST request to create an account
    window.makeAccount = function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Create a POST request to the '/register' route.
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: username, password: password }),
        })
        .then(response => response.json())
        .then(data => {
            // Handle response data here
            console.log(data);
            if (data.success) {
                window.location.href = '/expense.html'; // Redirect to the dashboard or another page.
            } else {
                alert('Registration failed: ' + data.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    // Attach event listener to the login form to handle submission
    document.querySelector('.login-form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        // Determine which button was clicked to submit the form
        let buttonClicked = document.activeElement;

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (buttonClicked.classList.contains('login-button')) {
            // If the login button was clicked, send a POST request to '/login'
            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: username, password: password }),
            })
            .then(response => response.json())
            .then(data => {
                // Handle response data here
                console.log(data);
                if (data.success) {
                    window.location.href = '/expense.html'; // Redirect to the dashboard or another page.
                } else {
                    alert('Login failed: ' + data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        } else if (buttonClicked.classList.contains('register-button')) {
            // If the register button was clicked, call makeAccount function
            makeAccount();
        }
    });
});
