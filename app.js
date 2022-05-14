const express = require('express');
const app = express();
const PORT = 8080;

app.listen(PORT, ()=>{
    console.log('server running at port:', PORT);
});

app.get('/', (req, res) => {
   res.sendFile('./index.html', {root: __dirname}); 
});
app.get('/about', (req, res) => {
    res.sendFile('./about.html', {root: __dirname});
});
app.get('/contact-me', (req, res) => {
    res.sendFile('./contact-me.html', {root: __dirname});
});
app.get('/index', (req, res) => {
    res.redirect('/');
});
app.use((req, res) => {
    res.status(404).sendFile('./404.html', {root: __dirname});   
});

