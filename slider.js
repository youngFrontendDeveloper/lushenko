// document.getElementById('slider-left').onclick = sliderLeft;  Вызов функции при клике на кнопку
let left = 0;
let timer;

function autoSlider() {
    timer = setTimeout(function(){
        let polosa = document.querySelector('#polosa');
        left = left - 240;
        if(left <= -720){
            left = 0;
            clearTimeout;
        }
        polosa.style.left = left + 'px';
        autoSlider(); 
    }, 2000);
}


// function sliderLeft() {
//     let polosa = document.querySelector('#polosa');
//     left = left - 240;
//     if(left <= -720){
//         left = 0;
//         clearTimeout;
//     }
//     polosa.style.left = left + 'px';
//     autoSlider();
// }

autoSlider();