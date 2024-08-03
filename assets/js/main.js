document.addEventListener("DOMContentLoaded", function() {
  var lastScrollTop = 0;
  var headerTop = document.querySelector(".header_top");
  var header = document.querySelector(".header");
  var logo = document.querySelector(".header_left a img");

  window.addEventListener("scroll", function() {
      var st = window.scrollY || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
          
          headerTop.classList.add("hidden");
          header.classList.add("fixed");
          // console.log(logo)
          logo.style.maxWidth = '90%';
      } else {
          
          if (st === 0) {
              
              headerTop.classList.remove("hidden");
              header.classList.remove("fixed");
              logo.style.maxWidth = '100%';
          } else {
              headerTop.classList.add("hidden");
              header.classList.add("fixed");
          }
      }
      lastScrollTop = st <= 0 ? 0 : st;
  }, false);
});


// owl carousel

  $(document).ready(function(){
  
  if($('.fea_products').length > 0){
    $(".fea_products").owlCarousel({
    dots: true,
    loop: true,
    autoplay: false,
    slideSpeed : 2000,
    margin: 0,
    responsiveClass: true,
    nav: true, 
    navText: ["<i class=\"fa-solid fa-angle-left\"></i>", "<i class=\"fa-solid fa-angle-right\"></i>"], 
    responsive: {
    0: {
    items: 1,
    nav: true
    },
    480: {
    items: 1,
    nav: true
    },
    600: {
    items: 1,
    nav: true
    },
    800: {
    items: 2,
    nav: true
    },
    1200: {
    items: 3,
    nav: true,
    loop: true,
    margin: 0
    }
    }
  
  });
  }
  })
