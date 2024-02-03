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

//   podcasts parts

var studentsComments = new Swiper(".podcasts-title", {
    loop: true,
    spaceBetween: 30,
    breakpoints: {  
        '300': {
          slidesPerView: 2,},
        '640': {
          slidesPerView: 3, },
        '1000': {
          slidesPerView: 4, },
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   podcasts show title

let english = document.querySelector('.english-part');
let french = document.querySelector('.french');
let german = document.querySelector('.german');
let spanish = document.querySelector('.spanish');
let shortStory = document.querySelector('.short-story');
let vocabularies = document.querySelector('.vocabularies');

function showEnglish (){
    english.classList.remove('d-none');
    french.classList.add('d-none');
    german.classList.add('d-none');
    spanish.classList.add('d-none');
    shortStory.classList.add('d-none');
    vocabularies.classList.add('d-none')
}

function showFrench (){
    english.classList.add('d-none');
    french.classList.remove('d-none');
    german.classList.add('d-none');
    spanish.classList.add('d-none');
    shortStory.classList.add('d-none');
    vocabularies.classList.add('d-none')
}

function showGerman (){
    english.classList.add('d-none');
    french.classList.add('d-none');
    german.classList.remove('d-none');
    spanish.classList.add('d-none');
    shortStory.classList.add('d-none');
    vocabularies.classList.add('d-none')
}

function showSpanish (){
    english.classList.add('d-none');
    french.classList.add('d-none');
    german.classList.add('d-none');
    spanish.classList.remove('d-none');
    shortStory.classList.add('d-none');
    vocabularies.classList.add('d-none')
}

function showStory (){
    english.classList.add('d-none');
    french.classList.add('d-none');
    german.classList.add('d-none');
    spanish.classList.add('d-none');
    shortStory.classList.remove('d-none');
    vocabularies.classList.add('d-none')
}

function showWords (){
    english.classList.add('d-none');
    french.classList.add('d-none');
    german.classList.add('d-none');
    spanish.classList.add('d-none');
    shortStory.classList.add('d-none');
    vocabularies.classList.remove('d-none')
}