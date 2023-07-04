$(document).ready(function() {
    $.validator.methods.phone = function( value, element ) {
        return this.optional( element ) || /^\d{10}$/.test( value );
    }
    $("#signIn").submit(function(e) {
        e.preventDefault();
    }).validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3,
                maxlength: 50
            },

            apellidos: {
                required: true,
                minlength: 3,
                maxlength: 50
            },

            correo: {
                required: true,
                email: true
            },

            tel: {
                phone: true
            },

            password: {
                required: true,
                minlength: 7
            },

            confirmar: {
                required: true,
                equalTo: "#password"
            }
        },

        messages: {
            nombre: {
                required: "*Aún no sabemos tu nombre",
                minlength: "*Tu nombre es demasiado corto (mínimo 3 carácteres)",
                maxlength: "*Tu nombre es demasiado largo (máximo 50 carácteres)"
            },

            apellidos: {
                required: "*Aún no sabemos tus apellidos",
                minlength: "*Tu apellido es demasiado corto (mínimo 3 carácteres)",
                maxlength: "*Tu apellido es demasiado largo (máximo 50 carácteres)"
            },

            correo: {
                required: "*Aún no sabemos tu correo",
                email: "*Este no es un correo electrónico"
            },

            tel: {
                phone: "*Este no es un número de telefono, no ingreses carácteres ni espacios entre los números"
            },

            password: {
                required: "*Debes introducir una contraseña",
                minlength: "*Tu contraseña es demasiado corta (mínimo 7 carácteres)"
            },

            confirmar: {
                required: "*Debes volver a introducir tu contraseña",
                equalTo: "*Tus contraseñas no coinciden"
            }
        },
        errorElement: "em",
        errorPlacement: function(error, element) {
            error.addClass("help-block");
            error.insertAfter(element);
            element.css({'border': '1px solid #dc3545'});
        }
    })
});
