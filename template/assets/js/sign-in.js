
// sign in page

let codeRequest = document.querySelector('.sending-code');
let h6 = document.querySelector('.h6');
let span = document.querySelector('.seconds');
let counter = 60

codeRequest.addEventListener('click', () => {
    h6.classList.remove('d-none');
    codeRequest.classList.add('d-none');
    let timer = setInterval(() => {
        counter--;
        span.innerHTML = counter
    }, 1000)
    setTimeout(()=> {
        h6.classList.add('d-none');
        codeRequest.classList.remove('d-none');
        clearInterval(timer)
        counter = 60;
    }, 60000)
})