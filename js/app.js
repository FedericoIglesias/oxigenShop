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
let help = 0;
let cross = document.getElementById('popUp__cross')
let popUpMail = document.getElementById('popUp__input')
let popUpSend = document.getElementById('popUp__send')



// alert!!! suscribe to our newsletter
window.setTimeout(() => {
    if (help == 0) { backgroundGrey.setAttribute('class', 'backgroundGrey'), popUp.setAttribute('class', 'popUp'), help = 1 }
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
    ubi = Math.floor(-((((foot.getBoundingClientRect().top) - 665) / 43.98) - 109))
    bar.setAttribute('style', 'width: ' + ubi + '%');
    if (ubi >= 65) {
        buttonUp.setAttribute('class', 'button__up')
    } else { buttonUp.setAttribute('class', 'button__up display_none') }
    if (help == 0 && ubi >= 25) { { backgroundGrey.setAttribute('class', 'backgroundGrey'), popUp.setAttribute('class', 'popUp'), help = 1 } };
};
;
window.addEventListener('scroll', percentageScroller);

//function button up

buttonUp.onclick = function () {
    console.log(scrollY)
    let moveTop = setInterval(function () {
        window.scrollTo(0, scrollY - 4)
        console.log(scrollY);
        if (scrollY <= 0) { clearInterval(moveTop) }
    }, 5)
};

//Validation the form
formValidation.onclick = function () {
    let auxName = formName.value.length
    if (auxName <= 1 || auxName >= 101) { formName.setAttribute('class', 'contact-line-input border__error') }
    else { console.log('to  piola vroooooooo'), formName.setAttribute('class', 'contact-line-input') }
    //----------
    if (!(formMail.value.match(formatMail))) { formMail.setAttribute('class', 'contact-line-input border__error') }
    else { console.log('to  piola vroooooooo el mail'), formMail.setAttribute('class', 'contact-line-input') }
    //----------
    if (checkboxInput.checked) { checkboxDiv.setAttribute('style', '')}
    else {
        checkboxDiv.setAttribute('style', 'background-color: red')
    }

    sendForm(formName, formMail)
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
}


//slider 


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
                .setAttribute('class', 'img__slider')
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



window.setInterval(function () { go() }, 3000)


document.getElementById('select__1').onclick = function () { count = 1; go() };
document.getElementById('select__2').onclick = function () { count = 2; go() };
document.getElementById('select__3').onclick = function () { count = 3; go() };
document.getElementById('select__4').onclick = function () { count = 4; go() };
document.getElementById('select__5').onclick = function () { count = 5; go() };


document.getElementById('arrow__prev').onclick = function () { if (count == 1) { count = 4; go() } else { count = count - 2; go() } };
document.getElementById('arrow__next').onclick = function () { go() };



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




