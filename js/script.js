// Когда пользователь прокручивает вниз 20px от верхней части документа, сдвиньте вниз навигационная панель
// Когда пользователь прокручивает страницу до верха, сдвиньте ее вверх. navbar (50px из вида сверху)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 620 || document.documentElement.scrollTop > 620) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
}