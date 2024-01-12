// Imports
var express = require('express');
var fs = require('fs');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

function send(res, contentType, fileName) {
    console.log(`Attempting to send file: ${fileName}`); // Add this line for debugging
    res.set('Content-Type', contentType);
    fs.readFile(fileName, (err, data) => {
        if (err) {
            console.error(`Error reading the file: ${err.message}`); // Add this line for debugging
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

app.get('/script.js', (req, res) => {
    send(res, 'application/javascript', 'script.js');
})


console.log('Listening');
app.listen(5500);
