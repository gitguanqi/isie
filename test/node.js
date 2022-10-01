const http = require('http');
const xqisie = require('../lib/xqisie');

const server = http.createServer((req, res) => {
    
    if (req.url === '/') {
        const ua = req.headers['user-agent'];
        const browser = xqisie.check(ua);
        if (browser) {
            res.end('browser is:'+browser);
        } else {
            res.end('thanks.');
        }
    }
});

server.listen(3000, 'localhost', () => {
    console.log('xqisie server is running on http://localhost:3000 !');
});
