//See Phone script
(function(){

    document.querySelector('.see-phone').onclick = function(){seePhone()};
    let seePhoneDiv = document.querySelector('.see-phone')
     
    function seePhone(){
        document.querySelector('.phoneText').innerText = '(13) 3453-7676'
        seePhoneDiv.style.width = '10.5rem';     
    }

    let menu = document.getElementById('menuFixo');
    let phone = document.querySelector('.see-phone');
    let logo = document.querySelector('.principal-logo')
    let searchTitle = document.querySelector('.main-search-title')
    let idMainSearch = document.querySelector('#mainSearch')
    let form = document.querySelector('.main-form')
    let inputSize = document.querySelector('.input-style')
    let formBtn = document.querySelector('.divFormButton')
    let colorBtn = document.querySelector('.btn-style')
    let refBtn = document.querySelector('.formButton')

    window.addEventListener('scroll', function () {
        if (window.scrollY > 230){
            logo.src = 'img/logo-branco2.png'
            logo.style.maxWidth='55px'
            formBtn.style.width = '38vw'
            formBtn.style.justifyContent = 'start'
            formBtn.style.marginLeft = '20px'
            inputSize.style.width = '45%'
            refBtn.classList.add('refBtn-style')
            colorBtn.classList.add('btn-styleScroll')
            form.classList.add('formScroll')
            idMainSearch.classList.add('mainSearchScroll')
            menu.classList.add('menuScroll');
            searchTitle.classList.add('hiddenItems')
            phone.classList.add('hiddenItems')
            menu.classList.remove('nav-menu')
        }
        else {
            logo.src = 'img/logo-branco.png'
            logo.style.maxWidth = '185px';
            formBtn.style.width = '100vw'
            formBtn.style.justifyContent = 'center'
            formBtn.style.marginLeft = '0'
            inputSize.style.width = '25%'
            menu.classList.add('nav-menu')
            refBtn.classList.remove('refBtn-style')
            colorBtn.classList.remove('btn-styleScroll')
            form.classList.remove('formScroll')
            idMainSearch.classList.remove('mainSearchScroll')
            phone.classList.remove('hiddenItems')
            menu.classList.remove('menuScroll');
            searchTitle.classList.remove('hiddenItems')

        }

    });

})()


'use strict'

const menuSize = '250px';

let open = true;

document.querySelector('#btnMenu').addEventListener('click', e => {
    open = !open;
    toggleMenu();
})

document.querySelector('#btnClose').addEventListener('click', e => {
    open = false;

    toggleMenu();
})

function toggleMenu() {
    if (open) {
        document.querySelector('#menu').style.marginRight = `${menuSize}`;
        return;
    }

    document.querySelector('#menu').style.marginRight = `-${menuSize}`;
}

