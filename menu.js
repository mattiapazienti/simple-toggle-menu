(function ($) {
    
    // class togglemenu can be added via js when in mobile mode etc
    wrapper = $('body');
    el = wrapper.find('.togglemenu'); 
    act = el.children().children();
    act.children().not('a').hide();
    act.click(function() {
        if($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).children().not('a').slideUp('slow');
        } else {
            $(this).addClass('open');
            $(this).children().not('a').slideDown('slow');
            $(this).siblings().removeClass('open');
            $(this).siblings().children().not('a').slideUp('slow');
        }
    });
   
})(jQuery);
