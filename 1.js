// function f1() {
//     alert("Вы нажали кнопку");
// }
// function thisCat() {
//     alert("Это кот");
// }


//  свойство  .value  означает, что будет получено то, что вводит пользователь в поле input
// function squareOfNumber() {
//     let num = document.getElementById('inp_1').value;
//     alert(num*num);
// }

// +++++++++++++++++++КАЛЬКУЛЯТОР++++++++++++++++

// function plus(){
//     let num_1 = document.getElementById('num_1').value;
//     num_1 = parseInt(num_1);
//     let num_2 = document.getElementById('num_2').value;
//     num_2 = parseInt(num_2);

//     result = num_1 + num_2;
//     document.getElementById('out').innerHTML = "Результат: " + result;

// }
// function minus(){
//     let num_1 = document.getElementById('num_1').value;
//     num_1 = parseInt(num_1);
//     let num_2 = document.getElementById('num_2').value;
//     num_2 = parseInt(num_2);

//     result = num_1 - num_2;
//     document.getElementById('out').innerHTML = "Результат: " + result;
// }
// function multiply(){
//     let num_1 = document.getElementById('num_1').value;
//     num_1 = parseInt(num_1);
//     let num_2 = document.getElementById('num_2').value;
//     num_2 = parseInt(num_2);
//     result = num_1*num_2;
//     document.getElementById('out').innerHTML = "Результат: " + result;
// }

// +++++++++++++++++++ВЫВОД НА СТРАНИЦУ++++++++++++++++

// function out(){
//     let p = document.getElementById('out');
//     // p.innerHTML += ", <b>Hello!</b><br>";  // Тестовый текст, Hello!  (Hello! выделен жирным)
//     // p.innerText += ", <b>Hello!</b><br>";  // Тестовый текст, <b>Hello!</b>
//     // p.insertAdjacentHTML('afterbegin', 'Hi!'); // Hi!Тестовый текст
//     // p.insertAdjacentHTML('afterend', 'Hello'); // Hi!Тестовый текст     Hello

//     p.outerHTML = '<div class="new">Hello, new text</div>';
// }

// ++++++++++++++ВЕТВЛЕНИЕ (УСЛОВНЫЕ ОПЕРАТОРЫ)++++++++++++++

// function f1 () {
//     let num = document.querySelector('#num1').value;
//     num = parseInt(num);
//     let r;
    
//     if(num < 100){
//         r = "Введенное число меньше 100";
//     } else if (num == 100){
//         r = "Введенное число равно 100";
//       } else {
//         r = "Введенное число больше 100";
//       }
//       let result = document.querySelector('#res').innerHTML = "Результат: " + r;
// }

// +++++++++++++++++УГАДАЙ ЧИСЛО++++++++++++++

//     let prNum = Math.floor((Math.random() * 10) + 1);
//     // let tempOut = document.getElementById('temp-out');
//     // tempOut.innerHTML = prNum;
//     console.log(prNum);

// function guessNumber(){
//     let userNum, out;
    
//     userNum = document.querySelector('#user_num').value;

//     out = document.getElementById('out');

//     if(userNum == prNum){
//         out.innerHTML = "Поздравляем! - Вы угадали!";
//     } else if(userNum > prNum){
//         out.innerHTML = "Ваше число больше загаданного";
//       } else {
//           out.innerHTML = "Ваше число меньше загаданного";
//       }

// }

// ++++++++++++++++++++++++ЦИКЛ FOR+++++++++++++++++++++

// function f1(){
//     let p = document.querySelector('#out');

//     for(i = 0; i < 100; i = i + 2){
//         p.innerHTML += i + " ";
//     }
// }

// ++++++++++++++++++++++++ЦИКЛ WHILE+++++++++++++++++++++

// function f1(){
//     let cycle = document.getElementById('out');
//     let cycle1 = document.getElementById('out1');

//     let i = 0;
//     // Цикл с предусловием. Сначала проверяет условие, потом делает.
//     // При неправильных условиях не сработает ни разу
//     while(i < 50) {  
//         // i++;   //если приращение до команды - выведутся цифры от 1 до 50
//         cycle.innerHTML += i + " ";
//         i++;   //если приращение после команды - выведутся цифры от 0 до 49
//     }


//     j = 100;

//     // Цикл с постусловием. Сначала сделает, потом проверяет условие. 
//     // При неправильном условии сработает минимум 1 раз
//     do{
//         cycle1.innerHTML += j + " ";
//         j--;
//     }
//     while (j > 0);
// }

// +++++++++++++++++МАССИВЫ+++++++++++++++

// let array = [2,23,67,88, 'Hello', 'Hi', 'Good day'];

// // for (i = 0; i < array.length; i++) {
// //     document.querySelector('#out').innerHTML += array[i] + '<br>';
// // }

// function arrayOut() {
//     let p = document.querySelector('#out');
//     let str = "";
//     for(i = 0; i < array.length; i++) {
//         str += i + " --- " + array[i] + "<br>";
//     }
//     p.innerHTML = str;
// }
// arrayOut();

// function push_1() {   
//     let i1 = document.querySelector('#i_1').value;
//     array.push(i1);   // Добавляет элемент в конец массива
//     arrayOut();
// }

// function p2() {
//     array.pop();   // Удаляет элемент с конца массива
//     arrayOut();

// }

// +++++++++++++++++КЛАССЫ И ЭЛЕМЕНТЫ++++++++++++++

// let p = document.getElementsByTagName('p');  // Получаем массив с элементами "р"
// console.log(p);

// p.onclick = colorChange;

// function colorChange() {
//     p.style.color = 'red';   // Не работает, т.к. параграфов в массиве "р" два
// }


// for(let i=0; i<p.length; i++){
//     p[i].onclick = colorChange;
// }


// function colorChange() {
//     this.style.color = 'green';
//     this.style.background = 'pink';
// }
// this указывает на элемент, в котором произошло событие (кликнули)

// let odd = document.getElementsByClassName('odd');
// for(let i = 0; i < odd.length; i++){
//     odd[i].onclick = changeColors;
// }

// function changeColors(){
//     this.style.color = 'grey'
//     this.style.background = 'lightblue'
//     this.style.fontWeight = 900;
// }

// ++++++++++++++++++++++RADIOBUTTON++++++++++++++++++

// let radio = document.getElementsByName('opinion');

// for(let i = 0; i < radio.length; i++){
//     radio[i].onchange = examine;  // Событие onchange  - изменение первоначального состояния
// }

// function examine(){
//     console.log(this.value); // Выведется значение (value) выбранного элемента
// }

// Выбираем один товар из множества
// let choose = document.getElementById('choose');
// choose.onclick = chooseGoods;

// function chooseGoods() {
//     let goods = document.getElementsByName('goods');
//     for(let i = 0; i < goods.length; i++) {
//         if(goods[i].checked){
//             alert("Выбраны: " + goods[i].value);
//             break;    // Прекращение цикла
//         }
//     }
// }


// Выбираем несколько товаров из множества
// let choose = document.getElementById('choose');
// choose.onclick = chooseGoods;

// function chooseGoods() {
//     let goods = document.getElementsByName('goods');
//     let sum = []; 
//     let j = 0;
//     for(let i = 0; i < goods.length; i++) {
//         if(goods[i].checked){
//             sum[j] = goods[i].value;
//             j++; 
//         }
//     }
//     alert("Выбраны: " + sum);
// }

//    ++++++++++++++++++ОПЕРАТОР SWITCH+++++++++++++

// let changeCar = prompt("Выберите действие:\n1 - Купить автомобиль\n2 - Продать автомобиль\n3 - Обменять автомобиль");
// switch (changeCar) {
//     case '1': {
//         document.write("Выберите раздел 'Купить автомобиль'");
//         break;
//     }
//     case '2': {
//         document.write("Выберите раздел  'Продать автомобиль'");
//         break;
//     }
//     case '3': {
//         document.write("Выберите раздел  'Обменять автомобиль'");
//         break;
//     }
//     default: {
//         document.write("Вы ввели некорректную команду");
//         // break;
//     }

// }

// +++++++++++++++CSS GENERATOR+++++++++++++++++
// let r1 = document.getElementById('r1');
// let r2 = document.getElementById('r2');
// let r3 = document.getElementById('r3');
// let r4 = document.getElementById('r4');
// r1.oninput = cssGenerator;
// r2.oninput = cssGenerator;
// r3.oninput = cssGenerator;
// r4.oninput = cssGenerator;

                    // function cssGenerator1(){
                    //     //получаем прямоугольник
                    //     let div = document.getElementById('test');
                    //     //получаем textarea
                    //     let out = document.getElementById('out');
                    //     // добавляем прямоугольнику значения
                    //     div.style.borderTopLeftRadius = this.value + 'px';
                    //      // добавляем textarea значения
                    //     out.innerHTML = "-webkit-border-radius: " + this.value + 'px;\n';
                    //     out.innerHTML += "border-radius: " + this.value + 'px;';
                    // }
// function cssGenerator(){
//     //получаем прямоугольник
//     let div = document.getElementById('test');
//     //получаем textarea
//     let out = document.getElementById('out');
//     // добавляем прямоугольнику значения
//     div.style.borderTopLeftRadius = r1.value + 'px';
//     div.style.borderTopRightRadius = r2.value + 'px';
//     div.style.borderBottomRightRadius = r3.value + 'px';
//     div.style.borderBottomLeftRadius = r4.value + 'px';
//      // добавляем textarea значения
//     out.innerHTML = "-webkit-border-radius: " + r1.value + 'px' +' ' + r2.value + 'px' +' ' + r3.value + 'px' +' '+ r4.value + 'px;\n';
//     out.innerHTML += "border-radius: " + r1.value + 'px' +' ' + r2.value + 'px' +' ' + r3.value + 'px' +' '+ r4.value + 'px;';
// }

// ++++++++++++АССОЦИАТИВНЫЕ МАССИВЫ++++++++++

// let array = {
//     "age": 30,
//     "sex": "man",
//     "name": "Gorge",
//     "work experience": 2,
// }

// console.log(array);   //  {age: 30, sex: "man", name: "Gorge"}

// //  два вида записиЖ через квадратные скобки и через точку:
// console.log(array.age); // 30
// console.log(array["sex"]);  // man

// // Через квадратную скобку можно вызвать свойство, состоящее из двух и более слов:
// // console.log(array.work experience); //  missing ) after argument list
// console.log(array["work experience"]);  // 2

// // Через квадратную скобку можно вызвать свойство через переменную:
// let n = "name";
// console.log(array[n]);   // Gorge
// console.log(array.n);  // undefined

// Как получить ключи ассоциативного массива и значения ключей

// let out = document.querySelector('#out');
// for(let key in array) {
//     out.innerHTML += key + " ------ " + array[key] + "<br>";
// }

// out.innerHTML = "<b>Hi</b><br>"; // такой вывод обрабатывается не всеми браузерами
// // out.innerText = "<i>Hi</i>";  

// let yearOfMyBirth = 1970;
// let numberOfYears = 2019 - yearOfMyBirth;
// document.querySelector('.yearOfMyBirth').innerHTML = " Мне всего " + numberOfYears + "лет<br>";
// // document.querySelector('.yearOfMyBirth').innerHTML += "<i> Мне всего " + numberOfYears + "лет</i>";
// document.querySelector('.yearOfMyBirth').innerHTML += `<i> Мне всего ${numberOfYears} лет</i>`;

// console.log(numberOfYears);

// function hello() {
//     console.log("Hello!");
//     hello_2();
// }

// function hello_2() {
//     console.log("This is I");
// }
// let btn = document.querySelector('#btn');
// console.log(btn);  Проверяем, что получили кнопку

// btn.hidden = true;   Кнопка будет скрыта

// btn.onclick = hello;

// ++++++++++++++++ПОКАЗЫВАЕМ И СКРЫВАЕМ ЭЛЕМЕНТЫ+++++++++++++

// let modalHide = document.querySelector('#modal-hide');
// let modalShow = document.querySelector('#modal-show');
// let modal = document.querySelector('#modal');
// modalShow.onclick = showBlock;
// modalHide.onclick = hiddenBlock;

// function show(){
//     modal.style.display = "block";
//     modal.style.backgroundColor = "pink";
//     modal.style.borderRadius = '50px';
//     modal.style.borderWidth = '2px';
//     modal.style.borderColor = '#e0e0e0';
//     modal.style.height = '100px';
// }

// function hide() {
//     modal.style.display = "none";
// }
//  Или еще один вариант:

// function hiddenBlock() {
//     modal.hidden = true;
// } 

// function showBlock() {
//     modal.hidden = false;
// }

// Угадай число:
// let hiddenNumber =  Math.round(Math.random() * 10); // Генерируем случайное число
// // console.log(hiddenNumber);  //Смотрим, как генерируются числа

// let btnCheck = document.querySelector('#check'); //  Получаем кнопку
// btnCheck.onclick = guessTheNumber; // На событие onclick привязываем функцию

// function guessTheNumber() {
//     let userNumber = document.querySelector('#user_num').value; // Получаем значение, введенное пользователем
//     console.log(userNumber); // Смотрим, что ввел пользователь
//     userNumber = parseInt(userNumber); //  
      
//     if(isNaN(userNumber)) { // Проверяем, число или нет
//         alert("Введите число");
//         } else {
//             if (userNumber < 0 || userNumber > 10) {
//                 alert("Вы ввели некорректное число");
//                 } else if(userNumber < hiddenNumber ) {
//                     alert("Ваше число меньше загаданного");
//                     } else if(userNumber > hiddenNumber) {
//                         alert("Ваше число больше загаданного");
//                         } else {
//                             alert("Поздравляем! Вы угадали загаданное программой число!");
//                             location.reload();  //Перезагрузка страницы
//                             }

//             }
// }

// ++++++++++++++++++ТРЕНИРУСЬ С isNaN +++++++++++++++++

// let userNum = prompt("Введите какое-то число");
// if (isNaN (userNum)) {  // Проверка на число
//     alert("Введите число");
//     location.reload();  //Перезагрузка страницы
// } else if(userNum === null) {     // Нажал на кнопку "Отмена"
//     alert("Вы хотите прекратить работу?");
//     } else if(userNum === ""){   // Нажал на "ОК", ничего не введя
//         alert("Вы ничего не ввели");
//         location.reload();
//         } else {
//             alert(`Вы ввели ${userNum}`);
//             }

    // +++++++++++DOM  - ВЫВОД НА СТРАНИЦУ++++++++++++

// Парные теги:

//======================  inner
// document.querySelector('p').innerHTML += ". <b>Bye!</b><br>"; //  Bye!  - выделено жирным
// document.querySelector('p').innerText += " <b>Bye!</b>";  //<b>Bye!</b> - с тегами без выделения

// //=======================  outer
// document.querySelector('h1').outerHTML = "<h2>Это бывший заголовок h1</h2>";  //Это бывший заголовок h1
// // document.querySelector('h2').outerText = "Я изменился!"; // Я изменился! - простой текст без тегов

// //======================  Adjacent
// document.querySelector('div').insertAdjacentHTML("beforebegin", "<br>Hi, Я перед первым тегом!");
// document.querySelector('div').insertAdjacentHTML("afterbegin", "<br>Hello, Я после первого тега, перед текстом! ");
// document.querySelector('div').insertAdjacentHTML('beforeend', "<br>Hi, Я перед вторым тегом, после текста!");
// document.querySelector('div').insertAdjacentHTML("afterend", "Я после второго тега!");

// //=========================  Выбор одного из нескольких селекторов
// document.querySelector('.one span').innerHTML = "Я заменяю второй 'span'";

// // Непарный тег (всегда обращаемся к атрибутам тегов):

// // Сокращенное обращение к атрибутам элементов

// console.log(document.querySelector('img').alt);  // Получаем атрибут alt
// document.querySelector('img').alt = "Little Cat"; // Если мы можем получить атрибут, то можно и перезаписать его

// document.querySelector('img').src = "img/korabli.jpg";  //  Заменяем картинку

// // Универсальные команды для атрибутов

// document.querySelector('title').innerText = "Изучаем Java Script";

// // document.querySelector('link').href = "style_2.css";

// console.log(document.querySelector('p input').placeholder); // Пробуем получить селектор
// document.querySelector('p input').placeholder = "Напишите свой логин"; // Меняем значение value

// // document.querySelector('p input').type = "date";  // Меняем значение type
// // document.querySelector('p input'). type = "range";


// // ++++++++++++++++Домашняя работа +++++++++++++++++
// document.querySelector('button').onclick = changeTheStyles;
// function changeTheStyles() {
//     document.querySelector('link').href = "style_2.css";
// }

// ++++++++++ DOM  - ПОЛУЧЕНИЕ ДАННЫХ ++++++++++++

// document.querySelector('.push').onclick = function() {  // Запускаем функцию при клике на кнопку push
    
//     // // input = text
//     console.log(document.querySelector('.input-text').value); // Получаем данные, которые ввел пользователь
    
//     // //input = password
//     console.log(document.querySelector('.input-passw').value);  // Получаем данные, которые ввел пользователь
    
//     // //input = range
//     console.log(document.querySelector('.range-input').value);
    
//     // //input = date
//     console.log(document.querySelector('.calendar-input').value);

//     // //input = color
//     console.log(document.querySelector('.color-input').value);

//     // //input = checkbox
//     console.log(document.querySelector('#checkbox-input').checked);

//     // //input = radio
// Несколько элементов (массив)  querySelectorAll
   
//     let  radio = document.querySelectorAll('.radio-input'); // Получаем все элементы с классом radio-input
//     console.log(radio); // Смотрим, что получили
//     radio[1].hidden = true; // Применяем к одному элементу массивы свойство hidden
//     for(let i = 0; i < radio.length; i++) {
//         console.log(i); // 0  1  2    смотрим, сколько элементов в массиве
//         console.log(radio[i].value);  //  хорошо средне  плохо
//         console.log(radio[i].checked);  //  смотрим, какой элемент выбран
        
//         if(radio[i].checked) {
//             console.log(radio[i].value);  // Выводим значение выбранного элемента
//         }
//     }
// }

// ------Изменяем цвет параграфов

// document.querySelector('.chenge').onclick = function() {
//     let p = document.querySelectorAll('p');
//     // console.log(p);  // Смотрим, что получили
//     for(let i = 0; i < p.length; i++){
//         p[i].style.color = "red";
//     }
// }

//  Выбираем пункты из select

// document.querySelector('#select').onclick = function() {
//     let option = document.querySelectorAll('#music option');
//     for(let i = 0; i < option.length; i++){
//         if(option[i].selected){
//             console.log(option[i].value);
//             //  Или можно написать так (будет получен текст между тегами option):
//             console.log(option[i].innerHTML);
//         }
        
//     }
// }


// +++++++++++СОБЫТИЯ МЫШИ+++++++++++++
// Cлова с приставкой "on" обозначают события, а не свойства

// Одинарный клик мыши
// document.querySelector('.onclick').onclick = function() {
//     // console.log(document.querySelector('.onclick'));  // <div class="block click"></div>
//     console.log("function work on click");  //  Выводим: "Функция работает"
// }

// // Двойной клик мыши
// document.querySelector('.dblclick').ondblclick = function() {
//     console.log("function work on double click");
// }

// // Движение мыши внутри объекта
// document.querySelector('.mousemove').onmousemove = function() {
//     console.log("Я появляюсь при движении мыши ");
// }

//   //Наведение мыши на объект (подобно :hover);  применяется, например, для появления скрытых пунктов меню при наведении мыши
// document.querySelector('.onmouseenter').onmouseenter = function() {
//     // Мышь наведена на блок, появилось скрытое меню
//     document.querySelector('.menu').style.display = "block";
// }

//  // Убираем мышь с объекта
// document.querySelector('.onmouseenter').onmouseleave = function() {
//     // Мышь убрана с блока, скрытое меню исчезло
//     document.querySelector('.menu').style.display = "none";
// }

//   //Мышь - колесико. Используют когда необходимо какое-то событие при прокрутке колесика над объектом. 
// document.querySelector('.mousewheel').onmousewheel = function() {
//       console.log("Это мышь-колесико"); // Страница браузера прокручивается
//   }


// document.querySelector('.mousewheel').onmousewheel = function() {
//     console.log("Прокручиваемся");
//     return false;  // Теперь страница не прокручивается вместе с колесиком
// }

// // Отключение контекстного меню через правую кнопку мыши
// document.querySelector('.mousewheel').oncontextmenu = function() {
//     console.log("Context menu");
//     return false;  // Контекстное меню отключено на объекте
//     // Если убрать "return false", то контекстное меню будет появляться
// }

// ++++++++++++++Вешаем события на несколько элементов (массив)++++++++++++

//    for
// let link = document.querySelectorAll('.link');
// console.log(link);
// for(let i = 0; i < link.length; i++){
//     link[i].onclick = function () {
//         console.log(link[i].innerHTML);
//         link[i].style.color = "green";
//     };
// }

// или второй вариант:

// for(let i = 0; i< link.length; i++ ) {
//     link[i].onclick = changeColor;
// }
// function changeColor() {
//     // console.log("lightblue");
//     this.style.color = "lightblue";
// }

// //   Метод forEach

// link.forEach(function (element) {
//    element.onclick = function() {
//         element.style.color = "green";
//         element.style.backgroundColor = "yellow";
//     };
//   });


//   link.forEach(function (item, index, array) {
//     console.log(`${item} имеет позицию ${index} в ${array}`);
//   });

//   link.forEach(one);

//   function one () {
//     console.log("Я работаю");
//   }

//   +++++++++++++++++ТАБЫ-ВКЛАДКИ+++++++++++++++++

// // Получаем массив элементов: li с классом tab:
// let tab = document.querySelectorAll('.tab');

// init();

// //  Скрываем текст у всех блоков div с классом tab-body, кроме первого
// // поэтому i начинается с 1, а не с 0
// function init() {
//     let tabBody = document.querySelectorAll('.tab-body');
//     for(let i = 1; i < tabBody.length; i++) {
//         tabBody[i].style.display = "none";
//     }
// }

// // Перебираем все элементы li с классом tab, и если кликнули на каком-то, то: 

// tab.forEach(function(element) {
//     // то запускаем функцию showTabs:
//     element.onclick = showTabs; 
//     // добавляем этому элементу класс active:
//     element.addEventListener("click", function() {
//         let current = document.getElementsByClassName("active");  // Получаем элемент с 
//         //классом active в настоящее время (нулевой элемент в массиве)
//         current[0].className = current[0].className.replace(" active", "");  // У нулевого 
//         //элемента в массиве класс active заменяем на  пустой
//         this.className += " active"; // Элементу, на который кликнули, добавляем класс active
//       });
// });

// function showTabs() {
//     let data = this.getAttribute('data');
//     let tabBody = document.querySelectorAll('.tab-body');
//     for(let i = 0; i < tabBody.length; i++) {
//         tabBody[i].style.display = "none";
//     }
//     document.querySelector(`.tab-body[data = "${data}"]`).style.display = "block";
    
// }

// document.querySelector('[value="20"]').value = 40;

// +++++++++++++КЛАССЫ+++++++++++++++++

// class Car {
//     constructor(parametr) {
//         this.speed = parametr;
//     }
//     viewSpeed(par) {
//         par.innerText = `Моя скорость ${this.speed} км/ч`;
//     }
// }

// let car1 = document.querySelector('#car1');
// let car2 = document.querySelector('#car2');
 
// let audi1 = new Car(300);
// audi1.viewSpeed(car1);
// let audi2 = new Car(350);
// audi2.viewSpeed(car2);

// // 2-й вариант:

// class Car {
//     constructor(parametr) {
//         this.speed = parametr;
//     }
//     viewSpeed(){
//        return `Моя скорость ${this.speed} км.ч`;
//     }
// }
// let audi = new Car(200);
// document.querySelector('#car1').innerText = audi.viewSpeed();

// audi.speed = 300;  
// document.querySelector('#car2').innerHTML = audi.viewSpeed();

// ++++++++++++++СОБЫТИЯ КЛАВИАТУРЫ+++++++++++++++

// //.onkeypress - нажали на клавишу и отпустили
// document.querySelector('#new_test').onkeypress = function(e) {
//     console.log(e); // Смотрим информацию по введенному в input пользователем символу
//     console.log(e.keyCode); //Код буквы, введенной пользователем в input
//     console.log(e.shiftKey);// Большая или маленькая буква, введенная пользователем

//     return false;  // Вводимый пользователем в input текст не виден (не печатается)

// }

// Запрет ввода каких-то символов кроме цифр в input
// document.querySelector('#new_test').onkeypress = function(e) {
//     console.log(e.keyCode); // Вводим 0 и 9 и смотрим в консоли их код 
//     if(e.keyCode < 48 || e.keyCode > 57){
//         console.log("Введен недопустимый символ");
        
//     } else {
//         this.value += e.key; 
//     }
//     return false;
// }

 //Ввод только маленьких латинских букв

//  document.querySelector('#new_test').onkeypress = function(event) {
    // console.log(event.keyCode);
//     if(event.keyCode < 97 || event.keyCode > 122) {
//         console.log("Ведите маленькие латинские буквы");
//     } else {
//         this.value += event.key;
//     }
//     return false;
//  }

// =====================
 // При наборе текста большие буквы превращались в маленькие
 // Не смогла сделать
//  document.querySelector('#new_test').onkeypress = function(e) {
//     // console.log(e);
//     // console.log(e.keyCode);
//     if(e.keyCode > 97 && e.keyCode < 122) {
//         this.value += e.key;
//     } else if (e.shiftKey = true) {
//         e.shiftKey = false;
//         this.value += e.key;
//         } else{
//             console.log("Введен недопустимый символ");
//             }
//     return false;
// }

// ====================

// Отлавливаем событие нажатия клавиш на документе:
// document.onkeypress = function(e) {
//     console.log("work");
// }

// ========================
// Двигаем квадрат вправо - влево с помощью букв d, a

// let left = 0;

// document.onkeypress = function(e) {
//     console.log(e.keyCode);
//     let sq = document.querySelector('.sq');
//     if(e.keyCode == 100) {
//         left = left + 10;
//         sq.style.marginLeft = left + "px";
//     } else if(e.keyCode == 97) {
//         left = left - 10;
//         sq.style.marginLeft = left + "px";
//     }
// }

// =========================
 // Двигаем квадрат вправо - влево с помощью стрелок
 // Для стрелок функция onkeydown, а не onkeypress
//  let left = 0;
//  let up = 0;
//  document.onkeydown = function(e) {
//      console.log(e.keyCode);
//      let sq = document.querySelector('.sq');
//      if(e.keyCode == 39) {
//          left = left + 10;
//          sq.style.marginLeft = left + "px";
//      } else if(e.keyCode == 37) {
//         left = left - 10;
//         sq.style.marginLeft = left + "px";
//      } else if(e.keyCode == 38) {
//         up = up - 10;
//         sq.style.marginTop = up + "px";
//      } else if(e.keyCode == 40) {
//          up = up + 10;
//          sq.style.marginBottom = up + "px";
//      }
//  }

//================= Второй вариант ( работает плохо - тормозит)

// let left = up = 0;
// document.onkeydown = function(e) {
//     let sq = document.querySelector('.sq');
//     switch(event.key) {
//         case 'ArrowLeft':
//             left = left - 10;
//             sq.style.marginLeft = left + "px";
//             break;
//         case 'ArrowRight':
//             left = left + 10;
//             sq.style.marginRight = left + 'px';
//             break;
//         case 'ArrowUp':
//             up = up - 10;
//             sq.marginTop = up + 'px';
//             break;
//         case 'ArrowDown':
//             up = up + 10;
//             sq.style.marginBottom = up + "px";
//             break;
//     }
// }

document.onkeypress = function () {
    console.log("keypress");
}

document.onkeydown = function() {
    console.log("keydown");
}

document.onkeyup = function() {
    console.log("keyup");
} 

// +++++++++++++++РАБОТАЕМ С CSS++++++++++

let block = document.querySelector('.block');

console.log(block.style); // Смотрим свойства
block.style.width = "200px";  // Меняем значение свойства
block.classList; //  Получаем доступ к классу
console.log(block.classList); // Смотрим список классов, который есть у элемента

block.classList.add('red');  //  Добавляем класс к элементу
block.classList.add('green');
block.classList.remove('green'); // Удаляем класс

block.classList.contains('green'); // Проверяем, содержит ли элемент класс green. Выдаст true/false
console.log(block.classList.contains('green')); // false

block.classList.toggle('red'); // Включаем/выключаем класс. Используется, например, в модальных окнах
block.classList.toggle('red');


