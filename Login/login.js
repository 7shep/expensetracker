document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(loginForm);
        const data = {
            username: formData.get('username'),
            password: formData.get('password')
        };

        if (event.submitter.className.includes('login-button')) {
            // Handle login
            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                // Handle response here
                console.log(data);
            });
        } else if (event.submitter.className.includes('register-button')) {
            // Handle account creation
            fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                // Handle response here
                console.log(data);
            });
        }
    });
});
