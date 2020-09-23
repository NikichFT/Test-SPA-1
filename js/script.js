function loadFirst() {
    document.getElementsByClassName('right-obj-load').style.display = 'block';
}
$(document).ready(function() {
    $('.obj').click(function(event) {
        $('.right-obj').removeClass('active')
        $('.right-obj-load').addClass('hide')
        var num = $(this).attr('data-num');

        $('#right-obj' + num).addClass('active')
    });
    $('.obj').click(function(event) {
        $('.obj').removeClass('active')
        $('.obj').removeClass('objFirst')
        var num = $(this).attr('data-num');
        $('#obj' + num).addClass('active')
    });
});