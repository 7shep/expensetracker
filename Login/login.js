
document.addEventListener("DOMContentLoaded", () => {

    const register = document.getElementById('register');
    register.addEventListener("click", () => {
       event.preventDefault();
       //alert("Clicked"); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if(username == '' || password == '') {
            alert("Invalid Username or Password.")
        } else {
            //console.log(username, password);
            fetch("/userlogin", {
                method: 'POST',
                body: JSON.stringify({
                    userName: username,
                    pswd: password
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
        }
    })

    const login = document.getElementById('login');
    login.addEventListener("click", () => {

    fetch("")


    })
})