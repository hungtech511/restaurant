$(window).on('load', function() {
  $("body").removeClass("preload");
});
AOS.init({
    once: true,
    duration: 1000,
});
// Nav
let openNav = document.querySelector(".open");
let closeNav = document.querySelector(".close");

  openNav.addEventListener("click",function(){
    document.getElementById('menu').style.width = '50%';
  });
  closeNav.addEventListener("click",function(){
    document.getElementById('menu').style.width = '0';
});
// Carousel
$('.menu-items').slick({
  slidesToShow: 3,
  arrows:true,
  prevArrow:'.prev',
  nextArrow:'.next',	  
  responsive: [
{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
