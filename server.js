// Imports
const express = require('express');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const admin = require('firebase-admin');

// Firebase imports
const { initializeApp } = require('firebase/app');
const { ref, set, getDatabase } = require('firebase/database');


const app = express();
app.use(cookieParser());
app.use(express.json()); // This will parse incoming JSON payloads

let GlobalUserRef;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const database = getDatabase();
  //const ref = database.ref('server/saving-data/fireblog/posts');
  //const analytics = getAnalytics(fbapp);

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

app.get('/Login/expense.html', (req, res) => {
    send(res, 'text/html', 'expense.html');
})

app.get('/Login/expense.css', (req, res) => {
    send(res, 'text/css', 'expense.css');
})

app.get('/Login/budget.js', (req, res) => {
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

app.post('/userlogin', (req, res) => {

    const username = req.body.userName;
    const password = req.body.pswd;

    console.log(username, password);
    sendInfo(username, password);
    
})

app.post('/budget', (req, res) => {

    const fixedexp = req.body.Fixed;
    const investmentexp = req.body.Investment;
    const foodexp = req.body.Food;
    const gamblingexp = req.body.Gambling;

    console.log(fixedexp, investmentexp, foodexp, gamblingexp);
    sendExpenses(fixedexp, investmentexp, foodexp, gamblingexp);
})

function sendInfo(username, password) {
    GlobalUserRef = ref(database, 'user/' + Math.floor(Math.random() * 10000));

    set(GlobalUserRef, {
        Username: username,
        Password: password
    });
    console.log('Sent to Firebase!');
    app.post('/userid', (userRef, req, res) => {
        return userRef;
    });
    console.log("POST")
}

function sendExpenses(fixed, investment, food, gambling) {
    set(GlobalUserRef, {
        FixedExpenses: fixed,
        Investment: investment,
        Food: food,
        Gambling: gambling
    })
    console.log("Sent!");
}


/*
ref.on('child_added', (snapshot, prevChildKey) => {
    const newPost = snapshot.val();
    console.log("Author: " + newPost.author);
    console.log("Title: " + newPost.title);
    console.log("Previous Post ID " + newPost.prevChildKey);
})
*/
console.log('Listening');
app.use(express.json());
app.listen(5500);
