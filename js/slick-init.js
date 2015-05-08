$(console.log("WAT"));
$(document).ready(function(){
  console.log("TEST");
  $('.slick').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});