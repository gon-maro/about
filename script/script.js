//メニューのやつ
$(function() {  $(".A").click(function() {  $(".B").toggleClass("C");  });});


//スクロール1//
const scroll_news = function () {
    const top = document.getElementById("news").getBoundingClientRect().top;
    window.scrollTo({
        top: top,
        behavior: 'smooth'
    });
};
const scroll_detayo1 = function () {
    const top = document.getElementById("detayo1").getBoundingClientRect().top;
    window.scrollTo({
        top: top,
        behavior: 'smooth'
    });
};

