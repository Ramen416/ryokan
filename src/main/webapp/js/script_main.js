

$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//slick

$(function(){
    $('.visual .slide').slick({
        arrows: false,  
        dots: false, 
        fade: true,
        autoplay: true,
        autoplaySpeed:4000,
        pauseOnHover: false,
        pauseOnFocus: false 
    });
    
//slide
    $('.intro_dining .slide2').slick({
        arrows: false, 
        dots: false, 
        fade: false,
        autoplay: true,
        autoplaySpeed:4000,
        pauseOnHover: false,
        pauseOnFocus: false 
    });
});

//탭메뉴
$(function(){
    $('.introduce .roomInfo .tab li a').on('click', function(){
        var num = $('.introduce .roomInfo .tab li a').index($(this));
        $('.introduce .roomInfo .tabBox').removeClass('on');
        $('.introduce .roomInfo .tabBox:eq('+ num +')').addClass('on'); 
    });
});

$(function(){
    $('.introduce .roomInfo .tab li a').on('click', function(){
        var num = $('.introduce .roomInfo .tab li a').index($(this));
        $('.introduce .roomInfo .tab li').removeClass('on');
        $('.introduce .roomInfo .tab li:eq('+ num +')').addClass('on'); 
    });
});

//scroll animation
$(function() {
	$('.animate').scrolla({
		mobile: true, 
		once: false 
	});    
      }); 

//패밀리 사이트
$(function(){
    $('.txt_wrap .btn_fam ').on('click', function(){
        $('.fam_site_wrap .item_wrap').slideToggle();
    });
});

//햄버거버튼
$(function(){
    $('header .menuOpen').on('click', function(){
        $('header .menuWrap').addClass('on');
    });
    $('.menuWrap .close').on('click', function(){
        $('.menuWrap').removeClass('on');
    });
});

//헤더 이벤트
var scrollTop = 0;
scrollTop = $(document).scrollTop();

$(window).on('scroll resize', function(){
 scrollTop = $(document).scrollTop();
    fixHeader();
});

function fixHeader(){
      if( scrollTop > 200) { $('header').addClass('on'); }
      else{ $('header').removeClass('on'); }
    } 

var bigPic = document.querySelector('.bigpic');
var smallPic = document.querySelectorAll('.smallpic');

for (var i=0; i<smallPic.length; i++) {
	smallPic[i].onclick  = changepic;	
};

function changepic() {
	var smallPicAttribute = smallPic.getAttribute("src");
	bigPic.setAttribute("src",smallPicAttribute);
	bigPic.style.zindex=10;
};


