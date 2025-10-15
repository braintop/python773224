const http = require('http');

const server = http.createServer((req, res) => {

    let path = req.url;
    if(path === '/') {
        res.write('home');
        res.end();
    } else if(path === '/api/users') {
        res.write('Users');
        res.end();
    }
    else {
        res.write('404');
        res.end();
    }
});

server.listen(3000);