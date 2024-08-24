const http = require('http');

const port = 3000;
const localHost = '127.0.0.1';

// http.createServer((req, res) => {
//     res.end("Hello. I am Sarver");
// }).listen(3000);

const myServer = http.createServer((req, res) => {
    res.end("<h1>Hello. I am Server</h1>");
});

myServer.listen(port, localHost, () => {
    console.log(`Server is running at http://${localHost}:${port}`);
})