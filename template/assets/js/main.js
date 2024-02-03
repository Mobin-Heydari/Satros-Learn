
// discount alert

let discountAlert = document.querySelector('.discount-alert');

function closeDiscount(){
    discountAlert.setAttribute('style', 'display: none;')
}

// header 

let mobileMenu = document.querySelector('.mobile-menu');
let menuFlag = false;

function showMenu(){
    if(menuFlag == false){
        mobileMenu.setAttribute('style', 'right: 0;');
        menuFlag = true;
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

// login page

let loginPage = document.querySelector('.login-page');

function openLogin(){
  loginPage.classList.remove('d-none');
}

function closeLogin(){
  loginPage.classList.add('d-none');
}


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

// home courses
let english = document.querySelector('.english');
let german = document.querySelector('.german');
let spanish = document.querySelector('.spanish');
let french = document.querySelector('.french');

function showEnglish() {
  english.classList.remove('d-none');
  german.classList.add('d-none');
  spanish.classList.add('d-none');
  french.classList.add('d-none')
}
function showGerman() {
  english.classList.add('d-none');
  german.classList.remove('d-none');
  spanish.classList.add('d-none');
  french.classList.add('d-none')
}
function showSpanish() {
  english.classList.add('d-none');
  german.classList.add('d-none');
  spanish.classList.remove('d-none');
  french.classList.add('d-none')
}
function showFrench() {
  english.classList.add('d-none');
  german.classList.add('d-none');
  spanish.classList.add('d-none');
  french.classList.remove('d-none')
}

// discount courses slider

var discountSlider = new Swiper(".discount-courses-slider", {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   timer

  let countDownDate = new Date ( "Sep 23, 2023 00:00:00").getTime();
  let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;
  
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById('day').innerHTML = days;
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('second').innerHTML = seconds;
  }, 1000);


// home podcast slider

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoplay: false,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

//   students comments

var studentsComments = new Swiper(".students-comments", {
    loop: true,
    spaceBetween: 30,
    autoplay: true,
    breakpoints: {  
        '300': {
          slidesPerView: 1,},
        '640': {
          slidesPerView: 2, },
        '1000': {
          slidesPerView: 4, },
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   home essays mobile slider

var essaysMobile = new Swiper(".home-essays-mobile-slider");