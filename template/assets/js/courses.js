// price range
let minSlider = document.getElementById('min');
let maxSlider = document.getElementById('max');
let minP = document.querySelector('.min-p');
let maxP = document.querySelector('.max-p');

minP.innerHTML = minSlider.value;
maxP.innerHTML = maxSlider.value;

minSlider.oninput = function(){
    minP.innerHTML = this.value;
}
maxSlider.oninput = function(){
    maxP.innerHTML = this.value
}