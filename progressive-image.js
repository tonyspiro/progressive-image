/*! Progressive Image
* Copyright (c) 2014 Tony Spiro http://tonyspiro.com/
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*//*
*/

(function( $ ) {
		 
    $.fn.progressiveImage = function() {
		
		var num = 0;
        
      return this.each(function(){
        
        var windowWidth = $(window).width();
				
				var imgFull = $(this).attr('img-full');
				var imgTablet = $(this).attr('img-tablet');
				var imgMobile = $(this).attr('img-mobile');
				var type = $(this).attr('img-type');
				
				$(this).addClass('progressive-image-' + num);
				
				var id = num;
				
				if(type=='background'){ 
					
					$(this).css('background-image','url(' + imgMobile + ')');
				
				} else {
					
					$(this).attr('src', imgMobile);
				
				}
				
				//// If smaller than mobile landscape
				if(windowWidth < 500){
					return false;
				}
				
				if(!$('#cacheTablet' + id).length) $('body').prepend('<img id="cacheTablet'  + id  + '" style="position: fixed; width: 0; height: 0; top: - 1000px;" src="' + imgTablet + '"/>');
				if(!$('#cacheFull' + id).length) $('body').prepend('<img id="cacheFull'  + id  + '" style="position: fixed; width: 0; height: 0; top: - 1000px;" src="' + imgFull + '" />');
				
					if(windowWidth>500 && windowWidth<770){
						
						if(type=='background'){ 
						
							$('.progressive-image-' + id).css('background-image','url(' + imgTablet + ')');
								
						} else {
							
							$('.progressive-image-' + id).attr('src', imgTablet);
						
						}

					} else {
						
						if(type=='background'){ 
							
							$('.progressive-image-' + id).css('background-image','url(' + imgFull + ')');
								
						} else {
							
							$('.progressive-image-' + id).attr('src', imgFull);
						
						}
						
					}

				num++;
      
      });
 
    };
 
}( jQuery ));