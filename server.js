// Imports
var express = require('express');
var fs = require('fs');
var cookieParser = require('cookie-parser');

// Firebase imports
const { initializeApp } = require('firebase/app');
const { getDatabase } = require('firebase/database');

var app = express();
app.use(cookieParser());
app.use(express.json()); // This will parse incoming JSON payloads


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChG3rvO-2dWLqzaxQS2BVSfG953CJXJUg",
  authDomain: "tej4mculminating.firebaseapp.com",
  projectId: "tej4mculminating",
  storageBucket: "tej4mculminating.appspot.com",
  messagingSenderId: "951928473492",
  appId: "1:951928473492:web:2d5303a38572c243b2f181",
  measurementId: "G-8YSK128KTF"
};

// Initialize Firebase
const fbapp = initializeApp(firebaseConfig);
const database = getDatabase(fbapp);

function send(res, contentType, fileName) {
    res.set('Content-Type', contentType);
    fs.readFile(fileName, (err, data) => {
        if (err) {
            console.error(`Error reading the file: ${err.message}`);
            res.status(500).send('Error reading the file');
        } else {
            res.send(data);
        }
    });
}



app.get('/', (req, res) => {
    send(res, 'text/html', 'index.html');
});

app.get('/index', (req, res) => {
    send(res, 'text/html', 'index.html');
});

app.get('/index.css', (req, res) => {
    send(res, 'text/css', 'index.css');
});

app.get('/expense.html', (req, res) => {
    send(res, 'text/html', 'expense.html');
})

app.get('/expense.css', (req, res) => {
    send(res, 'text/css', 'expense.css');
})

app.get('/budget.js', (req, res) => {
    send(res, 'application/javascript', 'budget.js');
})

app.get('/animation.js', (req, res) => {
    send(res, 'application/javascript', 'animation.js');
})

app.get('/Login/login.html', (req, res) => {
    send(res, 'text/html', 'Login/login.html');
})

app.get('/Login/login.css', (req, res) => {
    send(res, 'text/css', 'Login/login.css');
})

app.get('/Login/login.js', (req, res) => {
    send(res, 'application/javascript', 'Login/login.js');
})


app.get('/forgotpassword.html', (req, res) => {
    send(res, 'text/html', 'Login/forgotpassword.html');
})

app.get('/Register/register.html', (req, res) => {
    send(res, 'text/html', 'Register/register.html');
})

app.post('/login', (req, res) => {
    const user = req.body.username;
    const password = req.body.password;
    console.log(user, password);
    res.json({ success: true, message: 'Logged in!' }); // Send a JSON response

})

app.post('/register', (req, res) => {
    res.json({ success: true, message: 'Registration successful!' }); // Send a JSON response
})


console.log('Listening');
app.use(express.json());
app.listen(5500);
