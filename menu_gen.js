$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        
        var faded_in = 0;
    
        /* Check the location of the nav menu in comparison to the window */
        $('#nav_menu_wrapper').each( function(i){
            var fade_zone = $('#content').position().top - 2*$(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > fade_zone && !faded_in){
                $(this).animate({'opacity':'1'},3000);
            }
            
        }); 
        
        /* Check the location of each of the icons */
        $('.icons').each( function(i){
            var icon_bottom = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Fades is all the icons of this class */
            if( bottom_of_window > icon_bottom){
                $(this).animate({'opacity':'1'},3000);
            }
            
        }); 
    
    });
    
});