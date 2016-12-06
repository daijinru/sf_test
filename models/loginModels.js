'use strict';
var AV = require('leanengine');

var login = {
	index:function(req,res,next){
		res.render('index',{
			title:'Todo list'
		})
	},
	login:function(req,res,next){
		if (req.body.username == '' || req.body.password == '') {
			res.json({message:'failed!'});
		} else {
			res.json({message:'success!'});
		}

		console.log(req.body);
		
	}
}

module.exports = login;