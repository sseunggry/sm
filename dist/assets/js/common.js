// 클릭 방지 이벤트
$('a[href="#"]').click(function(e) {
    e.preventDefault();
});

// gnb 
$('.gnbMenu.depth1>li').mouseover(function(){
    $(this).find('.gnbMenu.depth2').stop().slideDown(300);
    $(this).addClass('on');
}) 
.mouseleave(function(){
    $(this).find('.gnbMenu.depth2').stop().slideUp(300);
    $(this).removeClass('on');
});

$('.gnbMenu.depth2 > ul >li').mouseover(function(){
    $(this).addClass('on');
})
.mouseleave(function(){
    $(this).removeClass('on');
});

// 비주얼 슬라이드
$('.visual_slides').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocuse: false,
    dots: true,
    dotsClass: "slick-dots"
});

// 햄버거 메뉴 인터랙션
$('.hamBtn').click(function(){
    let $this = $(this);

    if ( $this.hasClass('click') ) {
        $this.removeClass('click');
        $('.gnbOpen').animate({opacity : ''}, 500).css('display','');
    } else {
        $this.addClass('click');
        $('.gnbOpen').css('display','block').animate({opacity : '1'}, 300);
    }

});

$('.moGnbMenu .depth1 > li').click(function(){

    let moSubMenu = $(this).children('.depth2');

    if ( moSubMenu.css('display') === 'none') {
        $('.moGnbMenu .depth1 > li .depth2').css('display', '');
        moSubMenu.css('display', 'block').animate({opacity : '1'}, 300);
        
    } else {
        moSubMenu.css('display', '').animate({opacity : ''}, 300);
    }

});

// 화면에 따른 비주얼 사이즈
// function funcThisSize() {
//     $(window).innerWidth
// }

// $(function(){
//     let windowW = window.innerWidth;
//     let windowH = window.innerHeight;

//     $('')
// });

// let swiper = new Swiper('.swiper-container', {
//     slidesPerView: 'auto',
//     spaceBetween: 30,
//     freeMode: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// });

// 화면 위치에서 인터랙션 실행
$(window).scroll(function(){

    let scrollT = $(window).scrollTop();
    let windowH = window.innerHeight * 2/3;
    let artistY = 0;
    
    let mainNews = '.mainNews .thumbnail li:nth-child(3n-2), .mainNews .thumbnail li:nth-child(3n)';

    $('.artist').each(function(){
        artistY = $(this).offset().top;

        if (scrollT > artistY - windowH ) {
            $(this).children('li').addClass('effect');
        } else {
            $(this).children('li').removeClass('effect');
        }
    });

    $(mainNews).each(function(){
        newsthumbY = $(this).offset().top;

        if (scrollT > newsthumbY - windowH ) {
            $(this).animate({top : 0}, 300);
        }
    });

});

$('.artist li').mouseover(function(){
    $(this).addClass('hover');
})
.mouseleave(function(){
    $(this).removeClass('hover');
});

// top btn
$('.btn_top > a').click(function(){
    $('html, body').animate({ scrollTop : 0}, 400);
    return false;
});

// tab 클릭시
$('.tabList > li').click(function(){

    $('.tabList > li').removeClass('on');
    $(this).addClass('on');

});

// select Box
$('.select .select_type').click(function(){

    if ($(this).hasClass('click')) {
        $(this).siblings('.select_list').slideUp();
        $(this).removeClass('click');
    } else {
        $(this).siblings('.select_list').slideDown();
        $(this).addClass('click');
    }
});

$('body').click(function(e){
    e.stopPropagation();

    if ( !$('.select_type').is(e.target) ) {
        $('.select .select_list').slideUp();
        $('.select .select_type').removeClass('click');
    }
});

$('.select .select_list .option').click(function(){

    let $text = $(this).text();

    $(this).parent('.select_list').siblings('.select .select_type').children('span').text( $text );
    $(this).closest( $('.select .select_list') ).slideUp();
    $(this).parent('.select_list').siblings('.select .select_type').removeClass('click');
});