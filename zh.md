# isie

这是一个检测游览器类型和跳转提示页面的JS插件。

[查看英文文档](./README.md)

## 安装

**游览器端**:

引入cdn

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

## 使用

+ 检测游览器

```js
const browser = isie.check();
console.log('Browser is:', browser);
```

+ 跳转提示页面

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

## 查看示例

运行这个脚本查看展示案例：`npm run test:node`, `npm run test:browser`。

## 提问题

[这里提问](https://github.com/gitguanqi/isie/issues/new)

## 作者

[@gitguanqi](https://github.com/gitguanqi)
