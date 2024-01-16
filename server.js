// Imports
const express = require('express');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const admin = require('firebase-admin');

// Firebase imports
const { initializeApp } = require('firebase/app');
const { getDatabase } = require('firebase/database');

const app = express();
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

app.get('Register/register.css', (req, res) => {
    send(res, 'text/css', 'Register/register.css');
})

app.post('/login', async (req, res) => {
    const user = req.body.username;
    const password = req.body.password;

    try {
        const userRecord = await admin.auth().getUserByEmail(user);
        // Add logic to verify the password here (e.g., comparing hashed passwords)
        // ...
        res.json({ success: true, message: 'Logged in!' });
    } catch (error) {
        res.status(401).json({ success: false, message: 'Authentication failed!' });
    }
});

// Handle registration request
app.post('/register', async (req, res) => {
    const registeruser = req.body.username;
    const registerpassword = req.body.password;

    try {
        const userRecord = await admin.auth().createUser({
            email: registeruser,
            password: registerpassword
        });
        res.json({ success: true, message: 'Registration successful!' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Registration failed!' });
    }
});


// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert('serviceAccountKey.json'),
});

app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await admin.auth().getUserByEmail(username);
        // Verify password here (consider using custom authentication system)
        // Create session if needed
        res.json({ success: true, message: 'Logged in!' });
    } catch (error) {
        res.status(401).json({ success: false, message: 'Login failed' });
    }
});

app.post('/api/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        await admin.auth().createUser({
            email: username,
            password,
        });
        res.json({ success: true, message: 'Registration successful!' });
    } catch
(error) {
res.status(400).json({ success: false, message: 'Registration failed' });
}
});

console.log('Listening');
app.use(express.json());
app.listen(5500);
