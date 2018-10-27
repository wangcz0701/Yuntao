$(function(){

    $("#login-btn").on("click",function(){
        var username = $.trim($("[name='username']").val());
        var password = $.trim($("[name='password']").val());
        if(!username){
            mui.toast("�������û���");
            return;
        }

        if(!password){
            mui.toast("����������");
            return;
        }
        $.ajax({
            url:"/user/login",
            type:"post",
            data:{
                username:username,
                password:password
            },
            beforeSend:function(){
                $("#login-btn").html("���ڵ�½...")
            },
            success:function(res){
                mui.toast("��½�ɹ�");
                $("#login-btn").html("��½");
                setTimeout(function(){
                    location.href = "user.html";
                },1000)
            }
        })
    });
});
