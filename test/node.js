const http = require('http');
const isie = require('../lib/isie');

const server = http.createServer((req, res) => {
    
    if (req.url === '/') {
        const ua = req.headers['user-agent'];
        const browser = isie.check(ua);
        if (browser) {
            res.end('browser is:'+browser);
        } else {
            res.end('thanks.');
        }
    }
});

server.listen(3000, 'localhost', () => {
    console.log('isie server is running on http://localhost:3000 !');
});
