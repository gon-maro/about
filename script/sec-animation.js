document.addEventListener('DOMContentLoaded', () => {
    //動かす要素のクラスを取得
    const elements1 = document.querySelectorAll('.detayo1');
    const elements2 = document.querySelectorAll('.detayo2');
    const elements3 = document.querySelectorAll('.detayo3');

    const observerCallback = (entries, observer, fadeInClass) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(fadeInClass);
                observer.unobserve(entry.target);
            }
        });
    };

    //クラス付与
    const observer1 = new IntersectionObserver((entries, observer) => {
        observerCallback(entries, observer, 'fade-in1');
    }, {
        threshold: 0.15
    });

    const observer2 = new IntersectionObserver((entries, observer) => {
        observerCallback(entries, observer, 'fade-in2');
    }, {
        threshold: 0.15
    });

    const observer3 = new IntersectionObserver((entries, observer) => {
        observerCallback(entries, observer, 'fade-in3');
    }, {
        threshold: 0.2
    });

    //監査開始させる
    elements1.forEach(element => {
        observer1.observe(element);
    });

    elements2.forEach(element => {
        observer2.observe(element);
    });

    elements3.forEach(element => {
        observer3.observe(element);
    });
});
