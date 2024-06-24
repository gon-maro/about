let gazou1 = document.getElementById("detayo1");//動かす要素の変数宣言
let gazou2 = document.getElementById("detayo2");//動かす要素の変数宣言
let gazou3 = document.getElementById("detayo3");//動かす要素の変数宣言

function kantan(entries) {
    if (entries[0].intersectionRatio == 0) {
        return;
    }
    else
    {
        gazou1.classList.add("alpha1");//動かす要素にクラスを付与
        gazou2.classList.add("alpha2");//動かす要素にクラスを付与
        gazou3.classList.add("alpha3");//動かす要素にクラスを付与
    }
};

let options = {
    threshold:0.1
};

let observer = new IntersectionObserver(kantan,options);

observer.observe(gazou1);//観察開始
observer.observe(gazou2);//観察開始
observer.observe(gazou3);//観察開始