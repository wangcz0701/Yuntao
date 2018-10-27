
$(function(){
    mui('.mui-scroll-wrapper').scroll({
        decelertion:0.0005
    });
    //获取一级分类数据
    $.ajax({
        url:"/category/queryTopCategory",
        type:"get",
        success:function(response){
            var html = template('category-first',{result:response.rows});
            console.log(response);
            $('#links').html(html);
            if(response.rows.length){
                $('#links').find('a').eq(0).addClass('active');
                var id = response.rows[0].id;
                getSecondCategory(id);
            }
        }
    })
});

$('#links').on('click','a',function(){
    var id = $(this).attr('data-id');
    $(this).addClass('active').siblings().removeClass('active');
    getSecondCategory(id);
});

function getSecondCategory(id){
    $.ajax({
        url:"/category/querySecondCategory",
        type:"get",
        data:{
            id:id
        },
        success:function(response){
            var html = template('category-second',response);
            $(".brand-list").html(html);
        }
    });
}
