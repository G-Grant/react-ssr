if(typeof window === 'undefined'){
    global.window = {}
}

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const SSR = require('../dist/index-server.js').default;
const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf-8');
const { renderToString } = require('react-dom/server');

app.get('/', (req, res)=>{
    let html = template.replace('<!-- html-placeholder -->', renderToString(SSR));
    res.end(html)
})

app.use(express.static('../dist'))

app.listen(8569)