$(function() {
    $(window).scroll(function () { 
        $('.fadein').each(function() {
            var elementPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if(scroll > elementPos - windowHeight  + 200) {
                $(this).addClass('scrollin');
            }
        });
    });

    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });

      $('#hamburger').click(function () {
          $(this).toggleClass('active');
          $('.menu-content').toggleClass('open');
      });
});