var keyword = getParamsByUrl(location.href, 'keyword');
var page = 1;
var html = "";
var priceSort = 1;
var This = null;
$(function(){

    mui.init({
        pullRefresh : {
            container: '#refreshContainer',//��ˢ�������ʶ��querySelector�ܶ�λ��cssѡ�������ɣ����磺id��.class��
            up : {
                height:50,//��ѡ.Ĭ��50.�������������϶�����
                auto:true,//��ѡ,Ĭ��false.�Զ���������һ��
                contentrefresh : "���ڼ���...",//��ѡ�����ڼ���״̬ʱ���������ؿؼ�����ʾ�ı�������
                contentnomore:'û�и���������',//��ѡ�����������û�и�������ʱ��ʾ���������ݣ�
                callback: getData //��ѡ��ˢ�º��������ݾ���ҵ������д������ͨ��ajax�ӷ�������ȡ�����ݣ�
            }
        }
    });

    $("#priceSort").on("tap",function(){
        priceSort = priceSort == 1? 2 : 1;
        html = "";
        page = 1;
        mui("#refreshContainer").pullRefresh().refresh(true);
        getData();
    });
});


function getData(){
    if(!This){
        This = this;
    }

    $.ajax({
        url:"/product/queryProduct",
        type:"get",
        data:{
            page:page++,
            pageSize:3,
            proName:keyword,
            price:priceSort
        },
        success:function(response){
            if(response.data.length > 0){
                html+=template("searchTpl",response);
                $("#search-box").html(html);
                This.endPullupToRefresh(false);
            }else {
                This.endPulldownToRefresh(true);
            }
        }
    });
}
