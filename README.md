# isie

This check browser type and go link tip page plugin.

[View Chinese documents](./zh.md)

## Install

**Browser**:

import cdn

```html
<!-- Browser -->
<script src="https://unpkg.com/isie/lib/isie.min.js"></script>
<!-- es module -->
<script type="module">
    import isie from '../lib/isie-esm.min.js';
</script>
```

**Node**:

```sh
npm install isie
```

```js
const isie = require('isie');
```

## Usage

+ check browser

```js
const browser = isie.check();
console.log('Browser is:', browser);
```

+ go link

```js
isie.goLink('./page/index.html');
```

+ node

```js
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

```

## View isie

Run this script to view the demonstration case: `npm run test:node`, `npm run test:browser`.

## ask questions

[submit your question](https://github.com/gitguanqi/isie/issues/new)

## Author

[@gitguanqi](https://github.com/gitguanqi)
