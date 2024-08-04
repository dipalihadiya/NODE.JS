const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    let log = `${Math.floor(Math.random() * 100)}-  ${req.url} : requasted massage :`

    console.log(log);

    fs.appendFile('demo.tet', log, () => {
        console.log('Sucsess...');
    })

    fs.readFile('index.html', 'utf-8', (err, data) => {
        console.log(data);
        if (req.url === '/') {
            fs.readFile('index.html', 'utf-8', (err, data) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            })
        } else if (req.url === '/about') {
            fs.readFile('about.html', 'utf-8', (err, data) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            })
        } else {
            fs.readFile('error.html', 'utf-8', (err, data) => {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            })
        }
    })
});

let port = 3000;

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})