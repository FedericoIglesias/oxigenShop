let menu = document.getElementById('hamburguesa__menu');
let foot = document.getElementById('footer')
let bar =  document.getElementById('percentage__scroller')
//menu mobile
document.getElementById('menuBtn').onclick = function () {
    if (menu.getAttribute('class').includes('display_none')) {
        menu.setAttribute('class', 'hamburguesa__menu')
    } else {
        menu.setAttribute('class', 'hamburguesa__menu display_none')
    }
}


//percentage scroller
let percentageScroller = () => {
    let ubi = Math.floor(-((((foot.getBoundingClientRect().top)-665)/43.98)-101))
    bar.setAttribute('style', 'width: ' + ubi + '%')
}


window.addEventListener('scroll', percentageScroller)
