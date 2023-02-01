let menu = document.getElementById('hamburguesa__menu');
let foot = document.getElementById('footer')
let bar = document.getElementById('percentage__scroller')
let buttonUp = document.getElementById('button__up')
let ubi;
let formName = document.getElementById('contact-line-name')
let formMail = document.getElementById('contact-line-mail')
let formValidation = document.getElementById('button__send')
let formatMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let checkboxInput = document.getElementById('checkbox__input')
let checkboxDiv = document.getElementById('contact__checkbox')
let popUp = document.getElementById('popUp')
let backgroundGrey = document.getElementById('backgroundGrey')
let cross = document.getElementById('popUp__cross')
let popUpMail = document.getElementById('popUp__input')
let popUpSend = document.getElementById('popUp__send')


// alert!!! suscribe to our newsletter
window.setTimeout(() => {
    if (localStorage.getItem('help') == null) { backgroundGrey.setAttribute('class', 'backgroundGrey'), popUp.setAttribute('class', 'popUp'), localStorage.setItem('help', 1) }
}, 5000)

backgroundGrey.onclick = () => {
    backgroundGrey.setAttribute('class', 'backgroundGrey display_none');
    popUp.setAttribute('class', 'popUp display_none');
}
cross.onclick = () => {
    backgroundGrey.setAttribute('class', 'backgroundGrey display_none');
    popUp.setAttribute('class', 'popUp display_none');
}

popUpSend.onclick = () => {
    let name = popUpMail
    if (!(popUpMail.value.match(formatMail))) { popUpMail.setAttribute('style', 'border: red 2px solid') }
    else { console.log('to  piola vroooooooo el mail'), backgroundGrey.setAttribute('class', 'backgroundGrey display_none'), popUp.setAttribute('class', 'popUp display_none') }

};


//menu mobile
document.getElementById('menuBtn').onclick = function () {
    if (menu.getAttribute('class').includes('display_none')) {
        menu.setAttribute('class', 'menu')
        document.getElementById('header').setAttribute('class', '')
    } else {
        menu.setAttribute('class', 'menu display_none')
        document.getElementById('header').setAttribute('class', 'box__shadow')
    }
}


//percentage scroller bar and show button up
let percentageScroller = () => {
    if(screen.width < 1000){
        ubi = Math.floor((-(((foot.getBoundingClientRect().top) - 468) / 45.05) + 101))
    }else{ubi = Math.floor((-(((foot.getBoundingClientRect().top) - 468) / 37.81) + 101))}
    bar.setAttribute('style', 'width: ' + ubi + '%');
    if (ubi >= 1) {
        buttonUp.setAttribute('class', 'button__up')
    } else { buttonUp.setAttribute('class', 'button__up display_none') }
    if (localStorage.getItem('help') == null && ubi >= 25) { { backgroundGrey.setAttribute('class', 'backgroundGrey'), popUp.setAttribute('class', 'popUp'), localStorage.setItem('help', 1) } };
};
;
window.addEventListener('scroll', percentageScroller);

//function button up

buttonUp.onclick = function () {
    console.log(scrollY)
    let moveTop = setInterval(function () {
        window.scrollTo(0, scrollY - 10)
        console.log(scrollY);
        if (scrollY <= 0) { clearInterval(moveTop) }
    }, 5)
};

//Validation the form
formValidation.onclick = function () {
    let auxName = formName.value.length
    let aux1 = 0
    let aux2 = 0
    let aux3 = 0
    if (auxName <= 1 || auxName >= 101) { formName.setAttribute('class', 'contact-line-input border__error'), aux1 = 0, document.getElementById('help__1').setAttribute('class','help__1') }
    else { formName.setAttribute('class', 'contact-line-input'), aux1 = 1, document.getElementById('help__1').setAttribute('class','help__1 display_none') }
    //----------
    if (!(formMail.value.match(formatMail))) { formMail.setAttribute('class', 'contact-line-input border__error'),aux2 = 0, document.getElementById('help__2').setAttribute('class','help__2 ') }
    else {formMail.setAttribute('class', 'contact-line-input'),aux2 = 1, document.getElementById('help__2').setAttribute('class','help__2 display_none') }
    //----------
    if (checkboxInput.checked) { checkboxDiv.setAttribute('style', ''),aux3 = 1}
    else {
        checkboxDiv.setAttribute('style', 'background-color: red'),aux3 = 0
    }
    if((aux1 + aux2 + aux3) == 3){sendForm(formName, formMail)}
}

// Send  validation form
const sendForm = async (name, email) => {

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: name,
            body: email,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
        location. reload()
}


//slider 

let carrusel = () => { let carru = setInterval(function () { go() }, 3000)}

carrusel()

let count = 1
let go = () => {
    
    document.getElementById('slider__1').setAttribute('class', 'img__slider display_none')
    document.getElementById('slider__2').setAttribute('class', 'img__slider display_none')
    document.getElementById('slider__3').setAttribute('class', 'img__slider display_none')
    document.getElementById('slider__4').setAttribute('class', 'img__slider display_none')
    document.getElementById('slider__5').setAttribute('class', 'img__slider display_none')
    document.getElementById('select__1').setAttribute('class', 'select__design')
    document.getElementById('select__2').setAttribute('class', 'select__design')
    document.getElementById('select__3').setAttribute('class', 'select__design')
    document.getElementById('select__4').setAttribute('class', 'select__design')
    document.getElementById('select__5').setAttribute('class', 'select__design')
    switch (count) {
        case 1: count += 1;
            document
                .getElementById('slider__1')
                .setAttribute('class', 'img__slider'),
            document
                .getElementById('select__1')
                .setAttribute('class', 'select__design background__white')
            break;
        case 2: count += 1;
            document
                .getElementById('slider__2')
                .setAttribute('class', 'img__slider')
            document
                .getElementById('select__2')
                .setAttribute('class', 'select__design background__white')
            break;
        case 3: count += 1;
            document
                .getElementById('slider__3')
                .setAttribute('class', 'img__slider')
            document
                .getElementById('select__3')
                .setAttribute('class', 'select__design background__white')
            break;
        case 4: count += 1;
            document
                .getElementById('slider__4')
                .setAttribute('class', 'img__slider')
            document
                .getElementById('select__4')
                .setAttribute('class', 'select__design background__white')
            break;
        default: count = 1;
            document
                .getElementById('slider__5')
                .setAttribute('class', 'img__slider')
            document
                .getElementById('select__5')
                .setAttribute('class', 'select__design background__white')
            break;
    }
}




document.getElementById('select__1').onclick = function () { count = 1; clearInterval(carru);go();carrusel };
document.getElementById('select__2').onclick = function () { count = 2; clearInterval(carru);go();carrusel };
document.getElementById('select__3').onclick = function () { count = 3; clearInterval(carru);go();carrusel };
document.getElementById('select__4').onclick = function () { count = 4; clearInterval(carru);go();carrusel };
document.getElementById('select__5').onclick = function () { count = 5; clearInterval(carru);go();carrusel };
document.getElementById('arrow__prev').onclick = function () { if (count == 1) { count = 4; clearInterval(carru);go();carrusel } else { count = count - 2; clearInterval(carru);go();carrusel} };
document.getElementById('arrow__next').onclick = function () { clearInterval(carru);go();carrusel };



//bitch, give me money

let getValue = () => {
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json',)
        .then(response => response.json())
        .then(data => {
            let valueBlue = 0;
            let valueGreen = 0;
            switch (document.getElementById('currency').value) {
                case 'gbp':
                    valueGreen = data.eur.gbp * 60;
                    valueBlue = data.eur.gbp * 25;
                    document.getElementById('value__symbol').innerHTML = '£';
                    document.getElementById('value__green').innerHTML = Math.floor(valueGreen);
                    document.getElementById('value__blue').innerHTML = Math.floor(valueBlue);
                    document.getElementById('symbol__blue').innerHTML = '£';
                    document.getElementById('symbol__green').innerHTML = '£';
                    break;
                case 'usd':
                    valueGreen = data.eur.usd * 60;
                    valueBlue = data.eur.usd * 25;
                    document.getElementById('value__symbol').innerHTML = '$';
                    document.getElementById('value__green').innerHTML = Math.floor(valueGreen)
                    document.getElementById('value__blue').innerHTML = Math.floor(valueBlue)
                    document.getElementById('symbol__blue').innerHTML = '$';
                    document.getElementById('symbol__green').innerHTML = '$';
                    break;
                default:
                    document.getElementById('symbol__blue').innerHTML = '€';
                    document.getElementById('symbol__green').innerHTML = '€';
                    document.getElementById('value__symbol').innerHTML = '€';
                    document.getElementById('value__green').innerHTML = 60
                    document.getElementById('value__blue').innerHTML = 25
            }
        })
};

document.getElementById('currency').onclick = (getValue)

// menu scroll function

document.getElementById('menu__why').onclick = function (){
    let moveTo = setInterval(function () {
        if(scrollY < 600){window.scrollTo(0, scrollY + 4)
        }else{window.scrollTo(0, scrollY - 4)}
        if (scrollY <= 602 && scrollY >= 598) { clearInterval(moveTo) }
    }, 1)
}

document.getElementById('menu__benefits').onclick = function (){
    console.log(scrollY)
    let moveTo = setInterval(function () {
        if(scrollY < 1100){window.scrollTo(0, scrollY + 4)
        }else{window.scrollTo(0, scrollY - 4)}
        if (scrollY <= 1102 && scrollY >= 1098) { clearInterval(moveTo) }
    }, 1)
}

document.getElementById('menu__prices').onclick = function (){
    let moveTo = setInterval(function () {
        if(scrollY < 2400){window.scrollTo(0, scrollY + 4)
        }else{window.scrollTo(0, scrollY - 4)}
        if (scrollY <= 2402 && scrollY >= 2398) { clearInterval(moveTo) }
    }, 1)
}

document.getElementById('menu__contact').onclick = function (){
    let moveTo = setInterval(function () {
        if(scrollY < 3620){window.scrollTo(0, scrollY + 4)
        }else{window.scrollTo(0, scrollY - 4)}
        if (scrollY <= 3622 && scrollY >= 3618) { clearInterval(moveTo) }
    }, 1)
}

