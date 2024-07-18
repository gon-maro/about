//メニューのやつ
$(function() {  
    $(".A").click(function() 
        {  $(".B").toggleClass("C");  

        });
    });


//スクロール1//
const scroll_news = function () {
    const top = document.getElementById("news").getBoundingClientRect().top;
    window.scrollTo({
        top: top,
        behavior: 'smooth'
    });
};
const scroll_detayo1 = function () {
    const top = document.getElementById("points").getBoundingClientRect().top;
    window.scrollTo({
        top: top,
        behavior: 'smooth'
    });
};
const scroll_other = function () {
    const top = document.getElementById("contents").getBoundingClientRect().top;
    window.scrollTo({
        top: top,
        behavior: 'smooth'
    });
};

