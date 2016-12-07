'use strict';
var AV = require('leanengine');

var signup = {
    index: function(req, res, next) {
        res.render('signup', {
            title: 'Signup'
        })
    },
    signup: function(req, res, next) {

        if (req.body.username == '' || req.body.password == '' || req.body.email == '') {
            res.json({ message: '都是必填选项不为空', code: 100 });
        } else {
            // res.json({ message: '注册成功' });
            console.log(req.body);
            var user = new AV.User();
            user.setUsername(req.body.username);
            user.setPassword(req.body.password);
            user.setEmail(req.body.email);
            user.signUp().then(function(result) {
                console.log(result._serverData);
                res.json({ message: '注册成功！', code: 200 })
            }, function(error) {
                console.log(error);
                if (error.code == 203) {
                    res.json({ message: '邮箱已经存在！', code: error.code })
                } else if (error.code == 202) {
                    res.json({ message: '用户名已被注册！', code: error.code })
                } else if (error.code == 125) {
                    res.json({ message: '邮箱格式错误！', code: error.code })
                }
            });
        }


    }
}

module.exports = signup;
