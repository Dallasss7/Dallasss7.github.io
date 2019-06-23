$(document).ready(function() {
  var $navbar = $("#navBar");
  var $header = $('.header > h2');
  var $navbarMobile = $('.navbar');
  
  AdjustHeader();

  $(window).resize(function() {
      AdjustHeader();
  });
  
  function AdjustHeader(){
    if ($(window).width() < 600) {
        $navbar.css('display', 'none');
        $header.css('display', 'none');
        $navbarMobile.css('display', 'block');
        $navbarMobile.css('top', '0px');
    } else {
        $navbar.css('display', 'flex');
        $header.css('display', 'block');
        $navbarMobile.css('display', 'none');
    }
  }
});