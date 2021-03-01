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
  scale: 1.2,
  duration: 3000
});

sr.reveal('.wrapper-text-2', {
  scale: 0.2,
  duration: 3000
});

sr.reveal('.wrapper-text-3', {
  scale: 1.2,
  duration: 3000
});

sr.reveal('.section-two .image', {
  scale: 0.2,
  duration: 3000
});

/* sr.reveal('.section-two .image', {
  distance: '2rem',
  origin: 'left',
  duration: 2000
}); */

/*   карусель */
$(document).ready(function () {
  const slider = $("#slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 2
      },
      800: {
        items: 2
      },
      1200: {
        items: 3
      },
    }
  });
});


/* кнопка вверх */
$('body').append('<div class="upbtn"></div>');
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.upbtn').css({
            transform: 'scale(1)'
        });
        } else {
        $('.upbtn').css({
            transform: 'scale(0)'
        });
    }
});
$('.upbtn').on('click',function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});
