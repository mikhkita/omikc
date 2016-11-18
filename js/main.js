$(document).ready(function(){	
    function resize(){
       if( typeof( window.innerWidth ) == 'number' ) {
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || 
        document.documentElement.clientHeight ) ) {
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
    }
    $(window).resize(resize);
    resize();

    $.fn.placeholder = function() {
        if(typeof document.createElement("input").placeholder == 'undefined') {
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function() {
                var input = $(this);
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur().parents('form').submit(function() {
                $(this).find('[placeholder]').each(function() {
                    var input = $(this);
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });
            });
        }
    }
    $.fn.placeholder();
    
	// var myPlace = new google.maps.LatLng(55.754407, 37.625151);
 //    var myOptions = {
 //        zoom: 16,
 //        center: myPlace,
 //        mapTypeId: google.maps.MapTypeId.ROADMAP,
 //        disableDefaultUI: true,
 //        scrollwheel: false,
 //        zoomControl: true
 //    }
 //    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 

 //    var marker = new google.maps.Marker({
	//     position: myPlace,
	//     map: map,
	//     title: "Ярмарка вакансий и стажировок"
	// });

    //  var options = {
    //     $AutoPlay: true,                                
    //     $SlideDuration: 500,                            

    //     $BulletNavigatorOptions: {                      
    //         $Class: $JssorBulletNavigator$,             
    //         $ChanceToShow: 2,                           
    //         $AutoCenter: 1,                            
    //         $Steps: 1,                                  
    //         $Lanes: 1,                                  
    //         $SpacingX: 10,                              
    //         $SpacingY: 10,                              
    //         $Orientation: 1                             
    //     }
    // };

    // var jssor_slider1 = new $JssorSlider$("slider1_container", options);

   /* $('.b-slider__container').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      fade: true,
      asNavFor: '.b-slider__container-for-font'
  });
    $('.b-slider__container-for-fon').slick({
        asNavFor: '.b-slider__container',
        focusOnSelect: true,
      arrows: true,
      dots: true,
      prevArrow: '<div class="b-block"><div class="arrow-cont left-arrow"><img class=" arrow" src="img/slider_arrow-prev.png"></div></div>',
      nextArrow: '<div class="b-block"><div class="arrow-cont right-arrow"><img class=" arrow" src="img/slider_arrow-next.png"></div></div>'
    
    });
*/


    //закрывание бабла
    $(document).click( function(event){
      if( $(event.target).closest(".babl").length ) 
        return;
      $(".babl").fadeOut("slow");
      event.stopPropagation();
    });



    var flag = 1;
    //поиск в меню
    $('.b-nav .b-nav__menu .open_my_form').click(function() {
        $('.b-nav .b-nav__menu .open_my_form').hide();
        $('.right-cont .my_form').animate({
            'left': 0
        });
        $('.left-cont ul').animate({
            'margin-left': -217
        });
        flag = 0;
      });
    //закрывание поиска
    $(document).click( function(event){
      if (flag == 0) {
        flag = 1;
        return;
        }
        else {
            if( $(event.target).closest(".my_form").length ) 
            return;
        }
        $('.right-cont .my_form').animate({
            'left': 217
        });
        $('.left-cont ul').animate({
            'margin-left': 0
        });
        $('.b-nav .b-nav__menu .open_my_form').fadeIn();
      event.stopPropagation();
    });


    $('.b-services__slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        dots: false,
        slidesToShow: 3,
        prevArrow: '<div class="arrow-cont left-arrow"><img class=" arrow" src="img/slider-2_arrow-prev.png"></div>',
        nextArrow: '<div class="arrow-cont right-arrow"><img class=" arrow" src="img/slider-2_arrow-next.png"></div>'
    });


    $('.b-slider__container').slick({
        arrows: true,
        prevArrow: '<div class="b-block"><div class="arrow-cont left-arrow"><img class=" arrow" src="img/slider_arrow-prev.png"></div></div>',
        nextArrow: '<div class="b-block"><div class="arrow-cont right-arrow"><img class=" arrow" src="img/slider_arrow-next.png"></div></div>',
        dots: true,
        infinite: true,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.b-slider__container-for-fon'
    });
    $('.b-slider__container-for-fon').slick({
        asNavFor: '.b-slider__container',
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
    });

});