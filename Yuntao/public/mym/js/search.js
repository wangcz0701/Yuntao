$(function(){

    /*
     ʵ���û����������ť��ת���������ҳ

     1.��������ť��ӵ���¼�
     2.��ȡ�û�����������ؼ���
     3.�ж��û��Ƿ������������ؼ���
     4.����û�û������ ��ֹ��ת ���Ҹ�����ʾ
     5.����û������� ��ת���������ҳ�� ����Ҫ���û�����Ĺؼ��ִ������ҳ��ȥ

     */

    $('#search-btn').on('click', function(){

        // �û�����������ؼ���
        var keyword = $(this).siblings('input').val();

        // �û������˹ؼ���
        if(keyword){

            // ���û�����Ĺؼ��ִ浽������
            keyArr.push(keyword);

            // ���ؼ�������洢�ڱ���
            localStorage.setItem('keyArr', JSON.stringify(keyArr));

            location.href = "search-result.html?keyword=" + keyword;

        }else{
            // �û�û������ؼ���
            alert('������Ҫ��������Ʒ�ؼ���');
        }

    });


    /*
     ʵ����ʷ�ؼ��ִ洢

     1.׼��һ���洢�ؼ��ֵ�����
     2.���û����������ť��ʱ�� ���û�����Ĺؼ���׷�ӵ�������
     3.������洢�ڱ��ش洢��
     4.��ҳ��һ������ʱ�� �жϱ��ش洢���Ƿ����Ѿ��洢�Ĺؼ���
     5.�����ݺ�HTMLƴ�� ������չʾ��ҳ����

     */

    // �洢�ؼ��ֵ�����
    var keyArr = [];

    if(localStorage.getItem('keyArr')){

        keyArr = JSON.parse(localStorage.getItem('keyArr'));

        var html = template('historyTpl', { result: keyArr })

        $('#history-box').html(html);

    }

    /*
     ʵ�������ʷ

     1.��Ԫ����ӵ���¼�
     2.���ҳ���е����� ��ձ��ش洢�е�����
     */

    $('#clearBtn').on('click',function(){

        $('#history-box').html("");

        localStorage.removeItem("keyArr");

    });


});