$(document).ready(function(){
    $(".menu-opener").click(function(){
  $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
});
$(".menu-opener-footer").click(function(){
$(".menu-opener-footer, .menu-opener-inner-footer, .menu-footer").toggleClass("active");
});
});
