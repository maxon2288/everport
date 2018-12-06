$('input[name="phone"]').mask('0 000 000 00 00');

$(document).ready(function() {
    var swiper = new Swiper('.swiper-slider', {
        slidesPerView: 6,
        spaceBetween: 20,
        slideToClickedSlide: true,
        loop: true,
        autoplay: {
            delay: 2000,
        },  
        navigation: {
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            425: {
                slidesPerView: 1,
            },
        },
    });
    $(".ctg__subcatregory-link").click(function(e) {
        e.preventDefault();
    });
    var ctgSlider = new Swiper('.ctg-slider', {
        slidesPerView: 4,
        spaceBetween: 0,
        slideToClickedSlide: true,
        navigation: {
            nextEl: '.ctg-button-next',
            prevEl: '.ctg-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            }
        },
    });
    var swiper = new Swiper('.sert-slider', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
            nextEl: '.sert-button-next',
            prevEl: '.sert-button-prev',
        },
    });
    var swiper = new Swiper('.reviews-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 1000,
        loop: true,

        navigation: {
            nextEl: '.reviews-button-next',
            prevEl: '.reviews-button-prev',
        },
    });
    
    var width = $(".nav").width();
    $(".sub-menu").width(width);
    
    $(".lightGallery").lightGallery(); 
    
    $(".map-data").click(function() {
        var it = $(this);
        it.each(function() {
            var xdata = it.data('x');
            var ydata = it.data('y');
            $(".map-punc").css('top', ydata);
            $(".map-punc").css('left', xdata);
            $(".map-punc").addClass('visible');
        });
    });
    $(".map-data-kaz").click(function() {
        var it = $(this);
        it.each(function() {
            var xdata = it.data('x');
            var ydata = it.data('y');
            it.toggleClass('active');   
            $(".map-punc-kaz").css('top', ydata);
            $(".map-punc-kaz").css('left', xdata);
            $(".map-punc-kaz").addClass('visible');
        });
    });
    $('.form').each(function() {
       var it = $(this);
        it.validate({
            rules: {
                email: {
                    required: true,
                    email: true,
                },
                phone: {
                    required: true,
                    minlength: 11
                },
                messages: {
                    required: true,
                },
                name: {
                    required: false,
                },
                password: {
                    required: true,
                    
                },
                passwordYet: {
                    required: true,  
                    equalTo: "#password"          
                }
            },
        
            errorPlacement: function (error, element) {
                console.log(error)
                console.log(element)
            },

            submitHandler: function() {
                // console.log(1)
                // $(".form input, .form textarea").val('');
                $.ajax({
                    // type: 'POST',
                    // url: 'mail.php',
                    success: function(){
                        $(it).find("input").val("");
                        $(".thanx, .overlay").addClass("visible");
                        $("body, html").css('overflow-y', 'hidden');
                    }
                });
            },  
        
        });
    });
    
    $('.m-img-cont').each(function(){
        var imgCont = $(this).find('img').attr('src');
        $(this).css('background-image','url('+imgCont+')');
    });
    
    new WOW({
        mobile: false,
    }).init();
    
    $(document).ready(function () {
        $('select').niceSelect();
    });
    
    $( ".tabs" ).tabs({
        hide: { effect: "fade", duration: 150 },
        show: { effect: "fade", duration: 150 },
    });
    
    $( ".comp-tabs" ).tabs({
        hide: { effect: "fade", duration: 150 },
        show: { effect: "fade", duration: 150 },
    });
    
    $(".accordion").accordion ({
        hide: { effect: "fade", duration: 150 },
        show: { effect: "fade", duration: 150 },
        heightStyle: "content",
        collapsible: true,
    });
    
    $(function () {
    
        $('.close-button, .ok-close, .overlay, .nav-overlay, .humburger-overlay').on('click', function (event) {
            $('body').css('overflow', 'auto');
            $('.popup, .overlay, .nav-overlay, .nav').removeClass('visible');
            $('body, html').css('overflow-y', 'auto');
        });
    
        $(".callPopup").on('click', function (event) {
            event.preventDefault();
            var popup = $(this).attr('data-popupBlock');
            if ($('.' + popup).hasClass('popup--notfixed')) {
                $('.' + popup).css('top', $(window).scrollTop() + $(window).height() / 2);
            };
            $('body').css('overflow-y', 'hidden');
            $('.overlay').addClass('visible');
            $('.' + popup).addClass('visible');
        });
    
    });

    
    $('.buy__item-img').click(function(e) {
        e.preventDefault();
        $(this).closest('.buy__item').find('.popup, .overlay').addClass('visible');
    });
    
    $('.menu-open').click(function() {
        $('.header-menu, .humburger-overlay').addClass("visible");
        $('body').css('overflow-y', 'hidden');
    });
    
    $(".close-menu").click(function() {
        $(".header-menu, .humburger-overlay").removeClass("visible");
        $('body').css('overflow-y', 'auto');
    });
    
    $('.html table').each(function () {
        $(this).wrap('<div class="main-table-container"></div>');
    });
    
    
    $('.ctg__subcatregory-link').click(function() {
        $('.ctg__subcatregory-link').removeClass('active')
        $(this).addClass('active');
        var href = $(this).attr('href');
        window.location.href = href;
        
    });

    
    
    $(".ctg__subcategory").each(function() {
        var slideActive = $(".ctg__subcatregory-link.active").index();
        console.log(slideActive);
        ctgSlider.slideTo(slideActive);
    });

    if ($(window).width() >= 1024) {
        $(".stick").stick_in_parent();
    }

    // if ($('.nav-container').addCLass('.stick')) {
    //     $('.nav-container + div').css('display', 'none');
    // }    

    $(".button-open").click(function() {
        $('.nav, .nav-overlay').toggleClass('visible');
        $('body, html').css('overflow-y', 'hidden');
    });

});