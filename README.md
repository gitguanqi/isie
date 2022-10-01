# xqisie

This check browser type and go link tip page plugin.

[View Chinese documents](./zh.md)

## Install

**Browser**:

import cdn

```html
<!-- Browser -->
<script src="https://unpkg.com/xqisie/lib/xqisie.min.js"></script>
<!-- es module -->
<script type="module">
    import xqisie from '../lib/xqisie-esm.min.js';
</script>
```

**Node**:

```sh
npm install xqisie
```

```js
const xqisie = require('xqisie');
```

## Usage

+ check browser

```js
const browser = xqisie.check();
console.log('Browser is:', browser);
```

+ go link

```js
xqisie.goLink('./page/index.html');
```

+ node

```js
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

```

## View xqisie

Run this script to view the demonstration case: `npm run test:node`, `npm run test:browser`.

## ask questions

[submit your question](https://github.com/gitguanqi/xqisie/issues/new)

## Author

[@gitguanqi](https://github.com/gitguanqi)
