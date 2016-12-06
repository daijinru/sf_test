var login = {
	init:function(){
		this.eleBind();
	},
	eleBind:function(){
		$('#submit').on('click',this.submit);
	},
	submit:function(){
		var username = $('#inputUsername').val();
		var password = $('#inputPassword').val();
		var data = {
			'username':username,
			'password':password
		}
		console.log(data);
		$.ajax({
			type:"POST",
			url:'/login',
			data:data,
			dataType:'json',
			success:function(res){
				console.log(res.message);
			},
			error:function(res){
				console.log('通讯失败');
			}
		})
	}
}

$(function(){
	login.init();
})