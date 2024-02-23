// Create web server
var express = require('express');
var app = express();

// Create a route
app.get('/comments', function(req, res) {
    res.send('This is the comments page');
});

// Start the server
app.listen(3000, function() {
    console.log('Listening on port 3000');
});

// Start the server
app.listen(3000, function() {
    console.log('Listening on port 3000');
});

// Path: index.js
// Create web server
var express = require('express');
var app = express();

// Create a route
app.get('/', function(req, res) {
    res.send('This is the home page');
});

// Start the server
app.listen(3000, function() {
    console.log('Listening on port 3000');
});

// Path: posts.js
// Create web server
var express = require('express');
var app = express();

// Create a route
app.get('/posts', function(req, res) {
    res.send('This is the posts page');
});

// Start the server
app.listen(3000, function() {
    console.log('Listening on port 3000');
});

// Path: server.js
// Create web server
var express = require('express');
var app = express();

// Create a route
app.get('/comments', function(req, res) {
    res.send('This is the comments page');
});

app.get('/', function(req, res) {
    res.send('This is the home page');
});

app.get('/posts', function(req, res) {
    res.send('This is the posts page');
});

// Start the server
app.listen(3000, function() {
    console.log('Listening on port 3000');
});

// Path: server.js
// Create web server
var express = require('express');
var app = express();

// Create a route
app.get('/comments', function(req, res) {
    res.send('This is the comments page');
});

app.get('/', function(req, res) {
    res.send('This is the home page');
});

app.get('/posts', function(req, res) {
    res.send('This is the posts page');
});

// Start the server
app.listen(3000, function() {
    console.log('Listening on port 3000');
});