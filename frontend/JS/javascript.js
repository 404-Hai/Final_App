$(document).ready(function() {
    $.validator.addMethod("password", function(value, element) {
        return /^[A-Za-z0-9\d=!-@._*]+$/.test(value);
    }), "Password invalid";
});



$(document).ready(function() {
    $("#form_signup").validate({
        rules: {
            text_Input_First_Signup: {
                required: true,
                maxlength: 25
            },
            text_Input_Last_Signup: {
                required: true,
                maxlength: 25
            },
            email_Input_Signup: {
                required: true,
                email: true,
                maxlength: 255
            },
            password_Input_Signup: {
                required: true,
                password: true,
                maxlength: 64
            },
            password_Input_Confirm_Singup: {
                required: true,
                equalTo: "#password_Input_Signup",
                maxlength: 64
            }
        },
        messages: {
            text_Input_First_Signup: {
                required: "Pleases enter first name",
                maxlength: "Maximum 25 characters long "
            },
            text_Input_Last_Signup: {
                required: "Pleases enter first name",
                maxlength: "Maximum 25 characters long "
            },
            email_Input_Signup: {
                required: "Pleases enter email",
                email: "Invalid email",
                maxlength: "Maximum 255 characters long "
            },
            password_Input_Signup: {
                required: "Pleases enter password",
                password: "Invalid password",
                maxlength: "Maximum 64 characters long "
            },
            password_Input_Confirm_Singup: {
                required: "Pleases enter password",
                equalTo: "Password incorrect",
                maxlength: "Maximum 64 characters long "
            }
        }
    });
    $("button").click(function(e) {
        $("form_signup").submit();

    });
});


$("i").click(function() {
    if ($(this).hasClass('item_heart_blue')) {
        $(this).addClass('item_heart_gray')
        $(this).removeClass('item_heart_blue')
    } else {
        $(this).removeClass('item_heart_gray')
        $(this).addClass('item_heart_blue')
    }
});

function uploadImage() {
    var button = $('.images .pic')
    var uploader = $('<input type="file" accept="image/*" />')
    var images = $('.images')

    button.on('click', function() {
        uploader.click()
    })

    uploader.on('change', function() {
        var reader = new FileReader()
        reader.onload = function(event) {
            images.prepend('<div class="img" style="background-image: url(\'' + event.target.result + '\');" rel="' + event.target.result + '"><span>remove</span></div>')
        }
        reader.readAsDataURL(uploader[0].files[0])

    })

    images.on('click', '.img', function() {
        $(this).remove()
    })

}