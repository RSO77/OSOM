$(function () {

    //menu
    $('#nav-icon1').click(function () {
        $(this).toggleClass('open');
        $('.menu').toggleClass('show');
        $('html,body,main').toggleClass('overflow');

    });
    $('.menu-item').click(function () {
        $('.menu').removeClass('show');
        $('#nav-icon1').removeClass('open');
        $('html,body,main').removeClass('overflow');
    });

    //slider
    var swiper1 = new Swiper('.swiper-sl1', {
        slidesPerView: 1,
        speed: 700,
        // spaceBetween: 0,
        loop: true,
        autoplay : 5000,
        pagination: {
            el: '.sp1',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (("0")+(index+1)) + '</span>';
            },
        },
    });
    // slider2
    var swiper2 = new Swiper('.swiper-sl2', {
        slidesPerView: 1,
        speed: 700,
        spaceBetween: 0,
        loop: true,
        autoplay : 5000,
        // effect : 'fade',
        pagination: {
            el: '.sp2',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (("0")+(index+1)) + '</span>';
            },
        },
    });

    //swipe header
    $(window).scroll(function () {
        // console.log($(window).scrollTop());
        if ($(window).scrollTop() > 70) {
            $('.header').addClass('header-swipe')
        }
        else{$('.header').removeClass('header-swipe')}
    })

    //scrol
    $('.detailed, .begin-btn, .menu-item').bind('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('prevent')) {
            return false;
        }
        var target = this.hash,
            $target = $(target);

        var top = typeof  $target.offset() != 'undefined' ? $target.offset().top : 0

        $('html, body').stop().animate({
            'scrollTop': top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('.language').click(function () {
        $(this).toggleClass('li-active');
    });

    // $('section[data-type="background"]').each(function(){
    //     var $bgobj = $(this); // создаем объект
    //     $(window).scroll(function() {
    //         var yPos = -($window.scrollTop() / $bgobj.data('speed')); // вычисляем коэффициент
    //         // Присваиваем значение background-position
    //         var coords = 'center '+ yPos + 'px';
    //         // Создаем эффект Parallax Scrolling
    //         $bgobj.css({ backgroundPosition: coords });
    //     });
    // });
        $('.br-s4').each(function(){
            var $s4 = $(this); // Назначаем объект
            $(window).scroll(function() {
                var yPos = -(($(window).scrollTop() - $('.section4').offset().top) / 1);
                // Собираем значение координат фона вместе
                var coords = (500+ yPos) + 'px';
                console.log(coords);
                // Смещаем фон
                $s4.css({ top: coords });
            });
        });
        $('.br-s5').each(function(){
            var $s5 = $(this); // Назначаем объект
            $(window).scroll(function() {
                var yPos = -(($(window).scrollTop() - $('.section5').offset().top) / 1);
                // Собираем значение координат фона вместе
                var coords = (-50+ yPos) + 'px';
                console.log(coords);
                // Смещаем фон
                $s5.css({ top: coords });
            });
        });
        $('.br-s3').each(function(){
            var $s3 = $(this); // Назначаем объект
            $(window).scroll(function() {
                var yPos = -(($(window).scrollTop() - $('.section3').offset().top) / 1);
                var coords = (200+ yPos) + 'px';
                console.log(coords);
                $s3.css({ top: coords });
            });
        });
        $('.br-s2').each(function(){
            var $s2 = $(this);
            $(window).scroll(function() {
                var yPos = -(($(window).scrollTop() - $('.section2').offset().top) / 1);
                // Собираем значение координат фона вместе
                var coords = (150+ yPos) + 'px';
                console.log(coords);
                // Смещаем фон
                $s2.css({ top: coords });
            });
        });

    // $(window).on('scroll', function (){
    //     var  hgh = document.documentElement.clientHeight;
    //     if( $('.section5').offset().top <= ($(window).scrollTop() + hgh) ){
    //         $('#paralax1').each(function(){
    //             var $bgobj = $(this);
    //             var yPos = -(($(window).scrollTop() - $('.section5').offset().top) / 1);
    //             // Собираем значение координат фона вместе
    //             var coords = (50+ yPos) + 'px';
    //             console.log(coords);
    //             $bgobj.css({ bottom: coords });
    //         });
    //     }
    //     if(  $('.section4').offset().top >= ($(window).scrollTop + hgh) ){
    //         $('.br-s4').each(function(){
    //             var $bgobj = $(this);
    //                 var yPos = -(($(window).scrollTop() - $('.section4').offset().top) / 1);
    //                 // Собираем значение координат фона вместе
    //                 var coords = (50+ yPos) + 'px';
    //                 $bgobj.css({ bottom: coords });
    //         });
    //     };
    //
    //
    // });
});

