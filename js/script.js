/* Фиксированое меню */

// Когда пользователь прокручивает вниз 20px от верхней части документа, сдвиньте вниз навигационная панель
// Когда пользователь прокручивает страницу до верха, сдвиньте ее вверх. navbar (50px из вида сверху)
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 620 || document.documentElement.scrollTop > 620) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
}

/* Плавное появление блоков */
window.sr = new ScrollReveal()

sr.reveal('.wrapper-text-1', {
  /* dalay: 3000, */
  distance: "500px",
  origin: "top",
  /* scale: 0.2, */
  duration: 3000
});

sr.reveal('.wrapper-text-2', {
  distance: '500px',
  origin: 'right',
  duration: 3000
});

sr.reveal('.wrapper-text-3', {
  distance: '500px',
  origin: 'bottom',
  duration: 3000
});

sr.reveal('.section-two .image', {
  distance: '500px',
  origin: 'left',
  duration: 2000
});


/* $('.owl-carousel').owlCarousel({
  loop: true,
  margin: 20,
  smartSpeed: 100,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>',
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
}) */

/* $('.owl-carousel').owlCarousel({
    items: 1,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    loop: true,
    margin: 20,
    nav: true,
    navText: [
      '<svg width="35" height="35" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
      '<svg width="35" height="35" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>'
    ]
  }); */

/*   карусель */
  $(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});

/* кнопка вверх */

document.addEventListener('DOMContentLoaded', () => {

  let toTopBtn = document.querySelector('.to-up');

  window.onscroll = function () {
      if (window.pageYOffset > 580) {
          toTopBtn.style.display = 'block'
      } else {
          toTopBtn.style.display = 'none'
      }
  }

  // плавный скролл наверх 
  toTopBtn.addEventListener('click', function () {
      window.scrollBy({
          top: -document.documentElement.scrollHeight,
          behavior: 'smooth'
      });
  });
});


