

$(document).ready(function(){

  $('.evacuator__head').matchHeight({
    byRow: false
  })

  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

  $(window).on('load', function() {
    $('.section-slider-image .slick-prev, .section-slider-image .slick-next').prepend('<div class="semi-circle"></div>');
  });

borderH();

$('.tabs-caption').on('click', 'li:not(.tabs-caption__item_active)', function() {
  $(this).addClass('tabs-caption__item_active').siblings().removeClass('tabs-caption__item_active')
  .closest('.tabs').find('.form-wrapp__title').removeClass('form-wrapp__title_active').eq($(this).index()).addClass('form-wrapp__title_active');
  $('.mh1').matchHeight();
  borderH();
})

if ($('.product').length) {
  $('.product').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    adaptiveHeight: true
  });
}

$('.advantages__item, .evacuator, .mh1').matchHeight();

if ($('.image-sl').length) {
  $('.image-sl').slick({
   dots: false,
   infinite: true,
   speed: 300,
   slidesToShow: 1,
   adaptiveHeight: true 
 })
}

if ($('.services-slider').length) {
  $('.services-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    adaptiveHeight: true
  })

}


$('.services-slider__text, .services-slider__img-wrapp').on('mouseenter', function() {
  $(this).closest('.services-slider__item').find('img').addClass('greyscale_disable'); 
})
$('.services-slider__text, .services-slider__img-wrapp').on('mouseleave', function() {
  $(this).closest('.services-slider__item').find('img').removeClass('greyscale_disable'); 
})


 //    $("a.modal-form").fancybox({
 //       'hideOnContentClick': true,
 //          minWidth : 230,
 //          padding : 0,
 //          closeBtn : true
 
 // });

// $('header a[href^="#"]').on('click', function(event) {

//     var target = $( $(this).attr('href') );

//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top -85
//         }, 600);
//     }

// });



 jQuery(function($){ 
   $("input[type=tel]").mask("+7(999) 999-9999");
});

$('input,textarea').focus(function(){
 $(this).data('placeholder',$(this).attr('placeholder'))
 .attr('placeholder','');
}).blur(function(){
 $(this).attr('placeholder',$(this).data('placeholder'));
});



function borderH() {
  var h = $('.tabs-caption__item_active').outerHeight();
  console.log(h);
  $('head').append('<style>.tabs-caption__item_active:after {border-width: '+h/2+'px;}</style>');
}

});