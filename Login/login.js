
document.addEventListener("DOMContentLoaded", () => {

    const register = document.getElementById('register');
    register.addEventListener("click", () => {
       event.preventDefault();
       //alert("Clicked"); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

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



    })

    const loginbutton = document.getElementById('login');
    loginbutton.addEventListener("click", () => {
        window.location.href="uid.html";
    })

})