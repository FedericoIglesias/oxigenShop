let menu = document.getElementById('hamburguesa__menu');

document.getElementById('menuBtn').onclick = function(){
    if(menu.getAttribute('class').includes('display_none')){
        menu.setAttribute('class','hamburguesa__menu')
    }else{
        menu.setAttribute('class','hamburguesa__menu display_none')
    }
}
/*document
.querySelector('#menuBtn')
.addEventListener('click',() =>{
    let menu = document.getElementById('hamburguesa__menu');
    menu.
    if(menu.getAttribute('class').includes('display_block')){
        menu.setAttribute('class',"hamburguesa__menu display_block" )
    }else{
        menu.setAttribute('class',"hamburguesa__menu" )
    }
})*/