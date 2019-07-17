import $ from 'jquery';



//    显示导航栏AND楼梯导航
var swiper = $('.swiper').offset().top;
var storey_box = $('.storey_box').offset().top;
var Live = $('.Live').offset().top;
var Pan_Opera = $('.Pan_Opera').offset().top;
var National_Creation = $('.National_Creation').offset().top;
var Music = $('.Music').offset().top;
var Dance = $('.Dance').offset().top;
var Game = $('.Game').offset().top;
var Technology = $('.Technology').offset().top;
var Digital = $('.Digital').offset().top;
var life = $('.life').offset().top;
var guichu = $('.guichu').offset().top;
var Fashion = $('.Fashion').offset().top;
var Advertising = $('.Advertising').offset().top;
var Entertainment = $('.Entertainment').offset().top;
var Column = $('.Column').offset().top;
var movie = $('.movie').offset().top;
var Tvju = $('.Tvju').offset().top;
var Film = $('.Film').offset().top;
var Documentary = $('.Documentary').offset().top;
$(window).scroll(function () {
    var len1 = $(window).scrollTop();
    if (len1 + 1 >= swiper) {
        $('.sideNav').css("top", "30px")
    } else {
        $('.sideNav').css("top", "270px")
    }
    for (var i = 0; i < $('.sideNav_content .sortable').length; i++) {
        var navTop = $('.xu').eq(i).offset().top;
        if (len1 + 1 >= navTop -100) {
            $('.sideNav_content .sortable').eq(i).addClass('on');
            $('.sideNav_content .sortable').eq(i).siblings('.sideNav_content .sortable').removeClass('on');
        }
    }
})

$('.back-top').click(function () {
    $('html').animate({
        scrollTop: 0
    }, 500);
})



$('.sideNav_content .sortable').click(function () {
    var inn = $(this).index();
    var jnn = $('.xu').eq(inn).offset().top;
    $('html').animate({
        scrollTop: jnn
    }, 500);


})

// 点击排序
var sortCount = 0;
$('.customize').click(function(){
    sortCount++
    if(sortCount % 2 ==0){
        $('.nav-bg').animate({
            "opacity": "0",
            "width": "60px",
        },100);
        $('.qh').removeClass('elevator-mask');
    }else{
        $('.nav-bg').animate({
            "opacity": "1",
            "padding-left": "20px",
            "width": "200px",
            "z-index":"2"
        },100);
        $('.qh').addClass('elevator-mask');
    }
    
})

// 鼠标经过下载
$('#elevator-mobile-app').mouseover(function(){
    $('.app-tips-icon').animate({
        "opacity":"1"
    },500)
    $('#elevator-mobile-app').animate({
        "background-position-x": "-1200px"
    },9000)

})
$('#elevator-mobile-app').mouseout(function(){
    $('.app-tips-icon').animate({
        "opacity":"0"
    },500)
})


// nav下拉菜单
$('.nav_left li').mouseenter(function(){
    $(this)
    .children('.sub-nav')
    .stop()
    .slideDown()
})

$('.nav_left li').mouseleave(function(){
    $(this)
    .children('.sub-nav')
    .stop()
    .slideUp()
    
})

$('.sub-nav li span').mouseover(function(){
    $(this).addClass('pan1');
})

// 鼠标经过轮播图区域
$('.groom-module').mouseover(function(){
    $(this).find('.card-mark').css({
        "top":"0px",
        "overflow":"",
        "height":"80px"
    })
    $(this).find('.author').css({
        "opacity":"1"
    })
    $(this).find('.play').css({
        "opacity":"1"
    })
    $(this).find('.watch-later-trigger').show();
})

$('.groom-module').mouseout(function(){
    $(this).find('.card-mark').css({
        "top":"68px",
        "overflow":"hidden",
        "height":"20px"
    })
    $(this).find('.author').css({
        "opacity":"0"
    })
    $(this).find('.play').css({
        "opacity":"0"
    })
    $(this).find('.watch-later-trigger').hide();
})

$('.zhibo li').mouseover(function(){
    var i = $(this).find('img').attr('src');
    var j = Number(i.substr(23,3));
    // var reg = new RegExp('\\d[0-9]');
    // var j =i.replace(reg,i);
    var k = j+1;
    console.log(j,k);
    var l =i.replace(j,k);
    
    $(this).find('img').attr('src',l);
})
$('.zhibo li').mouseout(function(){
    var i = $(this).find('img').attr('src');
    var j = Number(i.substr(23,3));
    // var reg = new RegExp('\\d[0-9]');
    // var j =i.replace(reg,i);
    var k = j-1;
    console.log(j,k);
    var l =i.replace(j,k);
    
    $(this).find('img').attr('src',l);
})







  


      
    
     
  