Query(function() {    
    jQuery(".the-buttons").hide();
    /*jQuery('.show-image').hover(function() {
         jQuery(this).find('.the-buttons').fadeIn(1500);
    }, function() {
        jQuery(this).find('.the-buttons').fadeOut(1500); 
    });*/

    jQuery('.show-image').click(function() {
         jQuery(this).find('.the-buttons').fadeIn(1500);
    }, function() {
        jQuery(this).find('.the-buttons').fadeOut(1500); 
    });

    jQuery('.show-image').mouseout(function() {
        jQuery(this).find('.the-buttons').fadeOut(1500); 
    });
});