// // Показываем модальное окно по клику на кнопку Регистрация
// document.querySelectorAll('.modal-show').forEach(function(element){
//     element.onclick = showModal;
// });

// // Закрываем модальное окно по клику на кнопку Close
// document.querySelectorAll('.modal-close').forEach(function(element){
//     element.onclick = closeModal;
// });

// // Закрываем модальное окно по клику на темный фон (элемент .modal-wrap)
// document.querySelectorAll('.modal-wrap').forEach(function(element) {
//     console.log(element);
//     element.onclick = closeModalWrap;
// });
// // document.querySelectorAll('.modal').forEach(function(element){
// //     element.onclick = document.querySelector('.modal-wrap').classList.remove('hide');
// // });



// function showModal() {
//     // console.log(111);  //  Проверяем, работает ли функция
//     let modalId = this.dataset.modal; // Получаем параметры придуманного нами тега data
//     // console.log(document.querySelector(modalId)); // Проверяем, что получили
//     // console.log(document.querySelector(modalId).parentElement); // Получаем родительский элемент
//     document.querySelector(modalId).classList.remove('hide');
//     document.querySelector(modalId).parentElement.classList.remove('hide');
//     // document.querySelector(modalId).classList.toggle('hide'); // Мой вариант Скрываем / показывваем елемент
   
//     // Закрываем модальное окно по кнопке Esc
//     document.onkeydown = function(e) {
//     console.log(e); // Смотрим, какой keyCode у клавиши Escape
//     if(e.keyCode == 27) {
//         document.querySelectorAll('.modal-wrap').forEach(function(element){
//             element.classList.add('hide');
//             element.children[0].classList.add('hide');
//             document.onkeydown = null;
//         });
//     }
// }
// }
// function closeModal() {
//     let modalId = this.dataset.modal;
//     console.log(modalId);
//     document.querySelector(modalId).classList.add('hide');
//     document.querySelector(modalId).parentElement.classList.add('hide');
//     document.onkeydown = null;
// }
// function closeModalWrap() {
//     let modalId = this.dataset.modal;
//     this.classList.add('hide');
//     this.children[0].classList.add('hide'); // Это можно не писать, т.е. если скроется родитель, то скроются и дети
//     document.onkeydown = null;
// }


// Второй вариант модального окна (Не Лущенко)

document.querySelector('.btn-modal').onclick = function() {
    document.querySelectorAll('.hide').forEach(function(element) {
        element.classList.remove('hide');
    });
    
};

document.querySelectorAll('[class*=modal-]').forEach(function(btn) {
    btn.onclick = function() {
        document.querySelectorAll('.close').forEach(function(element) {
            element.classList.add('hide');
        });
    };
});


document.onkeydown = function(e) {
    if(e.keyCode == 27) {
        document.querySelectorAll('.close').forEach(function(element) {
            element.classList.add('hide');
        });
    }
};