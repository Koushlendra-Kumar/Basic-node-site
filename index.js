const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/html');
    let path = './';
    switch(req.url){
        case '/':
        case '/index':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/contact-me':
            path += 'contact-me.html';
            break;
        default:
            path += '404.html';
            break;
    }

    fs.readFile(path, (err, data) => {
        if(err) throw err;
        res.end(data);
    });
});

server.listen(PORT, ()=>{
    console.log('server running at port:', PORT);
});