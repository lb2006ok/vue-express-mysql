var mysql = require('mysql');
var express = require('express');
var $conf = require('../config/db');
var $util = require('../util/util');
var $sql = require('../dao/userSqlMapping');


var router = express.Router();

var pool = mysql.createPool($util.extend({}, $conf.mysql));

var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
}

router.post('/addUser', function (req, res, next) {
    pool.getConnection(function (err, connection) {
        var param = req.body;
        console.log(param)
        console.log(param)
        connection.query($sql.insert, [param.username, param.age], function (err, result) {
            if (result) {
                result = {
                    code: 200,
                    msg: '增加成功'
                }
            }

            console.log(err)
            jsonWrite(res, result);

            connection.release();
        })
    })
})
router.get('/getUser', function (req, res, next) {
    pool.getConnection(function (err, connection) {
        var param = req.query;
        console.log(req)
        connection.query($sql.queryById, [param.id], function (err, result) {
            if (result) {
            jsonWrite(res, result);
            console.log(result)
                result = {
                    code: 200,
                    msg: '查询成功'
                }
            }

            connection.release();
        })
    })
})

module.exports = router;