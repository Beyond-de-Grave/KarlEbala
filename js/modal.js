let body = document.getElementsByTagName('body')[0];	

//       S T A R T   M O D A L    I N F O

let open_modal_start = document.querySelectorAll('.start-info-link');
let modal_start = document.getElementById('modal-start');
let close_modal_start = document.getElementById('close_modal-start');

modal_start.classList.add('animate__animated');
for (let i = 0; i < open_modal_start.length; i++) {
    open_modal_start[i].onclick = function() { // клик на открытие
        modal_start.classList.add('modal_visible'); // добавляем видимость окна
        modal_start.classList.add("animate__backInLeft"); // Start animation
        modal_start.classList.remove('animate__backOutLeft'); // удаляем эффект закрытия
        body.classList.add('body_block'); // убираем прокрутку
    };
};
close_modal_start.onclick = function() { // клик на закрытие
    modal_start.classList.remove("animate__backInLeft"); 
    modal_start.classList.add('animate__backOutLeft'); // добавляем эффект закрытия
    window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modal_start.classList.remove('modal_visible'); 
        body.classList.remove('body_block'); // возвращаем прокрутку
    }, 500);
};

//        M O D A L    I N F O

let open_modal_info = document.querySelectorAll('.main-city__menu-info-link');
let modal_info = document.getElementById('modal-info');
let close_modal_info = document.getElementById('close_modal-info');

modal_info.classList.add('animate__animated');
for (let i = 0; i < open_modal_info.length; i++) {
    open_modal_info[i].onclick = function() { // клик на открытие
        modal_info.classList.add('modal_visible'); // добавляем видимость окна
        modal_info.classList.add("animate__backInLeft"); // Start animation
        modal_info.classList.remove('animate__backOutLeft'); // удаляем эффект закрытия
        body.classList.add('body_block'); // убираем прокрутку
    };
};
close_modal_info.onclick = function() { // клик на закрытие
    modal_info.classList.remove("animate__backInLeft"); 
    modal_info.classList.add('animate__backOutLeft'); // добавляем эффект закрытия
    window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modal_info.classList.remove('modal_visible'); 
        body.classList.remove('body_block'); // возвращаем прокрутку
    }, 500);
};