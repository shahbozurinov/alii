window.addEventListener("load", function(){
    AOS.init();
});

$('.wrapper').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    navText:['<a class="next-btn"><i class="fas fa-chevron-right"></i></a>'],

    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$('.box-textT').click(function(){
    $(this).toggleClass('active');
    $(this).parent().find('.accorDion-btn-after').toggleClass('arrow-animate');
    $(this).parent().find('.box-textB').slideToggle(280);
});