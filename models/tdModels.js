'use strict';
var AV = require('leanengine');

// `AV.Object.extend` 方法一定要放在全局变量，否则会造成堆栈溢出。
// 详见： https://leancloud.cn/docs/js_guide.html#对象
var Todo = AV.Object.extend('Todo');

var TD = {
    verify:function(req,res,next){
        res.render('verify',{
            title:'loading'
        })
    },
	// 查询 Todo
    ask: function(req, res, next) {
        var query = new AV.Query(Todo);
        query.descending('createdAt');
        query.find().then(function(results) {
            // console.log(results[0]._serverData.content);
            res.render('todos', {
                title: 'TODO 列表',
                todos: results
            });
        }, function(err) {
            if (err.code === 101) {
                // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
                // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
                res.render('todos', {
                    title: 'TODO 列表',
                    todos: []
                });
            } else {
                next(err);
            }
        }).catch(next);
    },
    // 新增 Todo
    add: function(req, res, next) {
        var content = req.body.content;
        var todo = new Todo();
        todo.set('content', content);
        todo.save().then(function(todo) {
            res.redirect('/todos');
        }).catch(next);
    }
}

module.exports = TD;