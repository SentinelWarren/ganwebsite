$( document ).ready(function() {
    $('tbody tr').hide();
    var calcContacts = function() {
        var rowsToShow = 5;
        var shownRows = 0;
        $('tbody tr').hide();
        var contacts = parseInt($('#filter').val(), 10);
        $('tbody tr td.contacts').each(function() {
            if (shownRows == rowsToShow) {
                return false;
            }
            var amount = parseInt($(this).attr('data-amount'));
            var input = $('#filter');
            if (amount >= contacts || input.val().length == 0) {
                shownRows++;
                $(this).parent().show();
            }
            var maxContacts = $('tbody tr:last td').attr('data-amount');
            if (contacts > maxContacts) {
                $('.even-larger').show();
            }
        });
    };
    calcContacts();
    $('#filter').keyup(calcContacts);

    $('.message-sent').hide();

    // Submit contact form
    $('#contactForm').submit(function(event) {

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'name': $('input[name=name]').val(),
            'email': $('input[name=email]').val(),
            'subject': $('input[name=subject]').val(),
            'message': $('textarea[name=message]').val(),
            'confirm': false
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'https://api.getanewsletter.com/v3/contact_us/', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
            encode      : true
        })
        .done(function(data) {
            console.log("done");
        });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
        // location.reload();
        $('.form-input').val('');
        $('.message-sent').show();

    });

    // Toogle nav
    $('.mobile-nav-toggle').on('click', function() {
        $('.nav-wrap').toggle();
    });

    $('#signupForm').submit(function(e){
        var valid = true;
        var email = $('input[name=email]').val();
        var password = $('input[name=password]').val();
        var password2 = $('input[name=password2]').val();

        if(email === '') {
            $('#email_error').html('This field is required.');
            valid = false;
        }
        if(password === '') {
            $('#password_error').html('This field is required');
            valid = false;
        }
        if(password != password2) {
            $('#password_error').html('Passwords does not match');
            valid = false;
        }

        if(valid === true){
            var formData = {
                'email': email,
                'password': password,
                'signup_code': 'tPy37ktV'
            };

            $.ajax({
                type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
                // url         : 'https://api.getanewsletter.com/v3/signup_campaign/', // the url where we want to POST
                url: 'https://api.getanewsletter.com/v3/signup_campaign/',
                data        : formData, // our data object
                dataType    : 'json', // what type of data do we expect back from the server
                encode      : true
            })
            .done(function(data) {
                alert('sending data to GA')
                window.location = 'https://api.getanewsletter.com' + data.login_url;
            })
            .error(function(data) {
                console.log(data.responseJSON)
                if(data.responseJSON && data.responseJSON.email){
                    $('#email_error').html(data.responseJSON.email);
                }
            });
        }
        return false;
    });

});
