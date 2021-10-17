
//back to top
let backTopBtn = document.querySelector('.back-top')
window.addEventListener('scroll',() =>{
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backTopBtn.style.opacity = "1";
  } else {
    backTopBtn.style.opacity = "0";
  }
})
//fixed header
window.onscroll = function() {fixedHeaderFunction()};
var header = document.querySelector("#header-bottom");
var sticky = header.offsetTop;
function fixedHeaderFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
}
//EXPERT TESTIMONIAL

$(document).ready(function(){
  $('.expert-testimonial').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ".arrow-prev",
    nextArrow: ".arrow-next",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}); 
