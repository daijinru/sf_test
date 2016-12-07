var signup = {
    lock: true,
    init: function() {
        this.eleBind();
    },
    eleBind: function() {
        $('#submit').on('click', this.submit);
    },
    submit: function(e) {
        if (signup.lock) {
            var remind = $('#submit');
            var username = $.trim($('#inputUsername').val());
            var password = $.trim($('#inputPassword').val());
            var email = $.trim($('#inputEmail').val());
            var data = {
                'username': username,
                'password': password,
                'email': email
            }
            console.log(data);
            signup.lock = false;
            $.ajax({
                type: "POST",
                url: '/signup',
                data: data,
                dataType: 'json',
                success: function(res) {
                    if (res.code == 200) {
                        remind.text(res.message);
                        setTimeout(function(){
                        	remind.text('2s后跳转登陆界面')
                        },1000);
                        setTimeout(function(){
                        	window.location.href = '/';
                        },1500)
                    } else if (res.code == 203) {
                        remind.text(res.message);
                    } else if (res.code == 202) {
                        remind.text(res.message);
                    } else if (res.code == 125) {
                        remind.text(res.message);
                    } else if (res.code == 100) {
                    	remind.text(res.message);
                    }
                    setTimeout('signup.lock = true',2000);
                },
                error: function(res) {
                    console.log('通讯失败');
                    setTimeout('signup.lock = true',2000);
                }
            })
        }


    }
}

$(function() {
    signup.init();
})
