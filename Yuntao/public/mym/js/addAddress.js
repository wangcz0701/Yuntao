$(function(){

    var isEdit = Number(getParamsByUrl(location.href, 'isEdit'));

    if(isEdit){

        // �༭����
        if(localStorage.getItem("editAddress")){

            var address = JSON.parse(localStorage.getItem("editAddress"));

            var html = template("editTpl",address);

            $('#editForm').html(html);

        }

    }else{

        // ��Ӳ���
        var html = template("editTpl",{});

        $('#editForm').html(html);
    }

    // ����pickerѡ����
    var picker = new mui.PopPicker({layer:3});

    // Ϊpickerѡ�����������
    picker.setData(cityData);

    // ���û��û��ı����ʱ��
    $('#selectCity').on('tap', function(){

        // ��ʾpickerѡ����
        picker.show(function(selectItems){

            // ���û�ѡ���������ʾ���ı�����
            $('#selectCity').val(selectItems[0].text + selectItems[1].text + selectItems[2].text);
        });

    });


    /**
     * ����ջ���ַ
     * 1.��ȡ�ջ���ַ����ť������ӵ���¼�
     * 2.��ȡ�û�����ı���Ϣ
     * 3.���û�����ı���Ϣ����У��
     * 4.��������ջ���ַ�ӿ� ʵ�ֹ���
     * 5.��ת���ջ���ַ�б�ҳ��
     */

    $('#addAddress').on('tap', function(){

        var username = $.trim($("[name='username']").val());
        var postCode = $.trim($("[name='postCode']").val());
        var city = $.trim($("[name='city']").val());
        var detail = $.trim($("[name='detail']").val());

        if(!username) {
            mui.toast("�������ջ�������");
            return;
        }

        if(!postCode) {
            mui.toast("��������������");
            return;
        }

        var data = {
            address: city,
            addressDetail: detail,
            recipients: username,
            postcode: postCode
        };

        if(isEdit){

            // �༭����
            var url = "/address/updateAddress";

            data.id = address.id;

        }else {

            // ��Ӳ���
            var url = "/address/addAddress";
        }

        $.ajax({
            url: url,
            type: 'post',
            data: data,
            success: function(res) {

                if(res.success) {

                    if(isEdit){
                        mui.toast("��ַ�޸ĳɹ�");
                    }else{
                        mui.toast("��ַ��ӳɹ�");
                    }

                    setTimeout(function(){
                        location.href = "address.html";
                    },2000)

                }

            }
        })


    });



});