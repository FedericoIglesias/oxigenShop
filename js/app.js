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


//percentage scroller bar and show button up
let percentageScroller = () => {
    ubi = Math.floor(-((((foot.getBoundingClientRect().top)-665)/43.98)-101))
    bar.setAttribute('style', 'width: ' + ubi + '%');
    if( ubi >= 65 ){
        buttonUp.setAttribute('class','button__up')
    }else{buttonUp.setAttribute('class','button__up display_none')}
};

window.addEventListener('scroll', percentageScroller);

//function button up

buttonUp.onclick = function() {
    console.log(scrollY)
    let moveTop = setInterval(function(){
        window.scrollTo(0,scrollY - 4)
        console.log(scrollY);
        if(scrollY <= 0){clearInterval(moveTop)}}, 5)

}

