const menu = document.querySelector('.navbar');
const burgerButton = document.querySelector('#burger-menu');

function hideShow(){
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active')  
        burgerButton.style.backgroundImage = 'url(\'../img/icons/menu.svg\')';  
    }else {
        menu.classList.add('is-active')
        burgerButton.style.backgroundImage = 'url(\'../img/icons/close.svg\')';
    }      
}

//
const ipad = window.matchMedia('screen and (max-width: 767px)');
ipad.addListener(validation);

function validation(event){
    if(event.matches){
        burgerButton.addEventListener('click', hideShow);
    }else {
        burgerButton.removeEventListener('click', hideShow);
    }     
}

//
validation(ipad)