// delet alert
let alert1 = document.getElementById('alert-1');
let alert2 = document.getElementById('alert-2');
let alert3 = document.getElementById('alert-3');

function deletAlert1(){
    alert1.classList.add('d-none');
}

function deletAlert2(){
    alert2.classList.add('d-none');
}

function deletAlert3(){
    alert3.classList.add('d-none');
}

// menu

let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.dashboard-menu');
let flag = false

function showMenu () {
    if(flag == false){
        menu.setAttribute('style', 'right: 0;');
        flag = true;
        console.log('ok');
    }
    else{
        menu.setAttribute('style', 'right: -100%;');
        flag = false;
        console.log('not ok');
    }
}