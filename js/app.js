// fixed nav bar in jquery
$(window).scroll(function() {
    if($(this).scrollTop() > 75) {
        $('.contact-nav .cn-content, .navbar').addClass('active');
    } else {
        $('.contact-nav .cn-content, .navbar').removeClass('active');
    };
});

$(document).ready(function(){
    // back to top
    $(window).scroll(function() {
        if ($(this).scrollTop()>300) {
            $('#scroll').fadeIn();
        }
        else{
            $('#scroll').fadeOut();
        }
    });

    $('#scroll').click(function(){
        $('html,body').animate({
            scrollTop:0 } , 600);
        return false;
    })
});
