const express = require("express");
const app = express();
const path = require("path");
// var port_number = app.listen(process.env.PORT || 3000);

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/contact.html"));
});

app.get('/findings2', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/findings2.html"));
});

app.get('/findings3', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/findings3.html"));
});

app.get('/findings4', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/findings4.html"));
});

app.get('/findings5', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/findings5.html"));
});

app.get('/findings6', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/findings6.html"));
});

app.get('/findings7', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/findings7.html"));
});

app.get('/findings8', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/findings8.html"));
});


app.listen(process.env.PORT || 3000);

// app.listen(3000, () => {
//     console.log("app is running on port", 3000);
// })