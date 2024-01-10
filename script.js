// Imports
var express = require('express');
var fs = require('fs');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
    send(res, 'text/html', 'index.html');
});

app.get('/index', (req, res) => {
    send(res, 'text/html', 'index.html');
});

function send(res, contentType, fileName) {
    res.set('Content-Type', contentType);
    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.status(500).send('Error reading the file');
        } else {
            res.send(data);
        }
    });
}

app.get('/style.css', (req, res) => {
    send(res, 'text/css', 'style.css');
});

app.get('/expense.html', (req, res) => {
    send(res, 'text/html', 'expense.html');
})

console.log('Listening');
app.listen(5500);
