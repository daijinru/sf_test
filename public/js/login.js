var login = {
    lock: true,
    init: function() {
        this.eleBind();
    },
    eleBind: function() {
        $('#submit').on('click', this.submit);
    },
    submit: function(e) {

        if (login.lock) {
            var remind = $('#submit');
            var username = $.trim($('#inputUsername').val());
            var password = $.trim($('#inputPassword').val());
            var data = {
                'username': username,
                'password': password
            }
            console.log(data);
            login.lock = false;
            $.ajax({
                type: "POST",
                url: '/login',
                data: data,
                dataType: 'json',
                success: function(res) {
                    if (res.code == 211) {
                        remind.text('用户不存在！');
                    } else if (res.code == 210) {
                        remind.text('用户密码不匹配');
                    } else if (res.code == 100) {
                        remind.text(res.message);
                    } else if (res.code == 1) {
                        remind.text('失败次数超限，锁定15分钟');
                    } else {
                        $.cookie('uname', username,{path:'/todos'});
                        remind.text('登陆成功，正在跳转');
                        setTimeout(function() {
                            window.location.href = '/todos';
                        }, 1500)
                    }
                    setTimeout('login.lock = true', 2000)
                },
                error: function(res) {
                    console.log('通讯失败');
                    setTimeout('login.lock = true', 2000)
                }
            })
        }
    }
}

$(function() {
    login.init();
})
