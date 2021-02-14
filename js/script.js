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
  duration: 2000
});

sr.reveal('.wrapper-text-2', {
  distance: '500px',
  origin: 'right',
  duration: 2000
});

sr.reveal('.wrapper-text-3', {
  distance: '500px',
  origin: 'bottom',
  duration: 2000
});

sr.reveal('.section-two .image', {
  distance: '500px',
  origin: 'left',
  duration: 2000
});

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
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
});


/* кнопка вверх */
$(document).ready(function () {
  var button = $('#button-up');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on('click', function () {
    $('body, html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});


