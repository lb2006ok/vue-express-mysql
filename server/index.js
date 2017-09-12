// node 后端服务器
var userApi = require('./api/userApi');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 后端api路由
app.use('/api/user', userApi);

app.use(express.static(path.resolve(__dirname, '../dist')))
app.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
    res.send(html)
})
// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');''