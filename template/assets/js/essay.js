// header 

let mobileMenu = document.querySelector('.mobile-menu');
let menuFlag = false;

function showMenu(){
    if(menuFlag == false){
        mobileMenu.setAttribute('style', 'right: 0;');
        menuFlag = true;
        console.log('ok');
    }else{
        mobileMenu.setAttribute('style', 'right: -100%;')
        menuFlag = false
    }
    
}

let dropdownBtn = document.querySelector('.dropdown-btn');
let dropMenu = document.querySelector('div.drop-menu');

dropdownBtn.addEventListener('click', () => {
  dropMenu.classList.toggle('d-none');
})

// search page 
let searchClose = document.querySelector('.search-close-btn');
let searchPage = document.querySelector('.search-page');
let searchIcon = document.querySelector('.search-icon')

searchClose.addEventListener('click', () => {
    searchPage.classList.add('d-none')
})

searchIcon.addEventListener('click', () => {
    searchPage.classList.remove('d-none')
})

// essay languages

let englishEssays = document.querySelector('.english');
let germanEssays = document.querySelector('.german');
let frenchEssays = document.querySelector('.french');
let spanishEssays = document.querySelector('.spanish');

function englishEssayHandler(){
    germanEssays.classList.add('d-none');
    frenchEssays.classList.add('d-none');
    spanishEssays.classList.add('d-none');
    englishEssays.classList.remove('d-none');
}
function germanEssayHandler(){
    germanEssays.classList.toggle('d-none');
    frenchEssays.classList.add('d-none');
    spanishEssays.classList.add('d-none');
    englishEssays.classList.add('d-none');
}
function frenchEssayHandler(){
    germanEssays.classList.add('d-none');
    frenchEssays.classList.toggle('d-none');
    spanishEssays.classList.add('d-none');
    englishEssays.classList.add('d-none');
}
function spanishEssayHandler(){
    germanEssays.classList.add('d-none');
    frenchEssays.classList.add('d-none');
    spanishEssays.classList.toggle('d-none');
    englishEssays.classList.add('d-none');
}