
let app_contact = new Vue({
    el: '#page-contact',
    data: {
        url_api_save_contact: url_api_save_contact,
        info: {
            name: '',
            address: '',
            phone: '',
            email: '',
            message: '',
            _token: ENV.token,
        },
        isSaving: false,
    },
    methods: {
        saveContact() {
            app_contact.isSaving = true;
            $('#form-contact small.text-danger').empty();
            $.ajax({
                url: this.url_api_save_contact,
                type: "POST",
                data: app_contact.info,
                statusCode: {
                    422: function (response) {
                        const errors = JSON.parse(response.responseText).errors;
                        // const errors = response.responseJSON.errors;
                        if(errors !== undefined) {
                          $.each( errors, function( key, val ) {
                            $('#page-contact small.contact-'+key).html(val[0]);
                          });
                        }
                    },
                },
                success: function (jsonData) {
                    if (jsonData.success) {
                        app_contact.info = {};
                        return Swal.fire({
                            title: window.i18n.site.thanhcong,
                            html: jsonData.message,
                            showCloseButton: true,
                            icon: "success"
                        }).then(function(){
                            location.reload();
                        });
                    }
                },
            }).always(function () {
                app_contact.isSaving = false;
            });
        }
    }
});
