$(function () {
    $(':submit').click(function (e) {
        if (($('.number').val() == "") || ($('.base').val() == "")) {
            alert('Заполните поля!');
            $('.result').text("");
        }
        else
        {
            var number = $('.number').val();
            var base = $('.base').val();
            $('.result').text(Math.log(number) / Math.log(base));
        }
    });
});

