const menu = document.querySelector('.navbar');
const menuItems = menu.querySelectorAll('.nav-item');
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
        menuItems.forEach(item => item.addEventListener('click',hideShow));
    }else {
        burgerButton.removeEventListener('click', hideShow);
        menuItems.forEach(item => item.removeEventListener('click',hideShow));

    }     
}

//
validation(ipad)