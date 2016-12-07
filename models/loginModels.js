'use strict';
var AV = require('leanengine');

var login = {
	index:function(req,res,next){
		res.render('index',{
			title:'Login'
		})
	},
	login:function(req,res,next){
		if (req.body.username == '' || req.body.password == '') {
			res.json({message:'所填项不为空！',code:100});
		} else {
			var username = req.body.username;
			var password = req.body.password;
			AV.User.logIn(username,password).then(function(result){
				res.json({message:'登陆成功！正在跳转',code:200});
			},function(error){
				console.log(error);
				res.json({message:error,code:error.code})
			});
		}

		console.log(req.body);
		
	}
}

module.exports = login;