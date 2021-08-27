const targetElement = document.querySelectorAll('.animationTarget');
document.addEventListener('scroll', function() {
    for (let i = 0; i < targetElement.length; i++) {
        const getElementDistance =
            targetElement[i].getBoundingClientRect().top +
            targetElement[i].clientHeight * 0.3; //６割くらい見えたらshow 0.6
        //二つ目が見えたらshowというクラスを足す
        if (window.innerHeight > getElementDistance) {
            targetElement[i].classList.add('show');
        }
        if (window.innerHeight < getElementDistance) {
            targetElement[i].classList.remove('show');
        }
    }
});