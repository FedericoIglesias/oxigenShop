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
    if(help == 0){backgroundGrey.setAttribute('class', 'backgroundGrey'),popUp.setAttribute('class', 'popUp'), help = 1}
},5000)

backgroundGrey.onclick = () => {
    backgroundGrey.setAttribute('class', 'backgroundGrey display_none');
    popUp.setAttribute('class', 'popUp display_none');
}
cross.onclick = () => {
    backgroundGrey.setAttribute('class', 'backgroundGrey display_none');
    popUp.setAttribute('class', 'popUp display_none');
}

popUpSend.onclick = ()  => {
    let name = popUpMail
    if (!(popUpMail.value.match(formatMail))) { popUpMail.setAttribute('style', 'border: red 2px solid') }
    else { console.log('to  piola vroooooooo el mail'),backgroundGrey.setAttribute('class', 'backgroundGrey display_none'),popUp.setAttribute('class', 'popUp display_none')} 
    
};


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
    ubi = Math.floor(-((((foot.getBoundingClientRect().top) - 665) / 43.98) - 101))
    bar.setAttribute('style', 'width: ' + ubi + '%');
    if (ubi >= 65) {
        buttonUp.setAttribute('class', 'button__up')
    } else { buttonUp.setAttribute('class', 'button__up display_none') }
    if(help == 0 && ubi >=25){{backgroundGrey.setAttribute('class', 'backgroundGrey'),popUp.setAttribute('class', 'popUp'), help = 1}}; 
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
    if (auxName <= 1 || auxName >= 101) {formName.setAttribute('class', 'contact-line-input border__error')}
    else { console.log('to  piola vroooooooo'), formName.setAttribute('class', 'contact-line-input') }
    //----------
    if (!(formMail.value.match(formatMail))) { formMail.setAttribute('class', 'contact-line-input border__error') }
    else { console.log('to  piola vroooooooo el mail'), formMail.setAttribute('class', 'contact-line-input') }
    //----------
    if(checkboxInput.checked){ checkboxDiv.setAttribute('style', 'background-color: red')}
    else{checkboxDiv.setAttribute('style', 'background-color: red')
    }

    sendForm(formName,formMail)
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
