

$(function() {

  // カルーセル
$('.carousel').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  autoplaySpeed: 5000,
  arrows: false,
});

//ホバー時にナビリンクを半透明に右側未

$('.navlink').on('mouseover',function() {
  $(this).animate({
    opacity: 0.5,
  }, 100);
});
$('.navlink').on('mouseout',function() {
  $(this).animate({
    opacity: 1.0,
  }, 100);
});


//TOPに戻るボタン
var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });

// ページ内スクロール
$('a[href^="#"]').click(function () {
  const speed = 600;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});

// セクションをフェードイン
$(window).on('load scroll', function (){
 
  var box = $('.fadeIn');
  var animated = 'animated';
  
  box.each(function(){
  
    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();
 
    if(scrollPos > boxOffset - wh + 100 ){
      $(this).addClass(animated);
    }
  });
});




  // WORKSの画像を半透明に、マウスアウトで戻す
  $('.imgitem').on('mouseover', function() {
    $(this).animate({
      opacity: 0.5,
    }, 100);
  });
  $('.imgitem').on('mouseout', function() {
    $(this).animate({
      opacity: 1.0,
    }, 100);
  });
  
//ワークスのモーダル
$('.works img').click(function() {
  const imgSrc = $(this).attr('src');
  const imgAlt = $(this).attr('alt');
  $('.img-big').attr({
    src:imgSrc,
    alt:imgAlt,
  });
  $('.modal-window').fadeIn();
});

//閉じるボタンをクリックしたときにモーダルを閉じる
$('.button-close').click(function() {
  $('.modal-window').fadeOut();
});

});