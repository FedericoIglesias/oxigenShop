let menu = document.getElementById('hamburguesa__menu');
let foot = document.getElementById('footer')
let bar =  document.getElementById('percentage__scroller')
let buttonUp = document.getElementById('button__up')
let ubi 

//menu mobile
document.getElementById('menuBtn').onclick = function () {
    if (menu.getAttribute('class').includes('display_none')) {
        menu.setAttribute('class', 'hamburguesa__menu')
    } else {
        menu.setAttribute('class', 'hamburguesa__menu display_none')
    }
}


//percentage scroller bar and button up
let percentageScroller = () => {
    ubi = Math.floor(-((((foot.getBoundingClientRect().top)-665)/43.98)-101))
    bar.setAttribute('style', 'width: ' + ubi + '%');
    if( ubi >= 65 ){
        console.log('holissssss')
        buttonUp.setAttribute('class','button__up')
    }else{buttonUp.setAttribute('class','button__up display_none')}
}


window.addEventListener('scroll', percentageScroller);
