(function () {

    const modalMain = document.getElementById("modal_main"),
        modalSuccess = document.getElementById('modal_success'),
        modalClose = document.querySelectorAll('div.modal__close'),
        showSuccess = document.querySelector('.show-success');

    modalMain.classList.add("modal_active");

    showSuccess.onclick = function () {
        modalMain.classList.remove("modal_active");
        modalSuccess.classList.add("modal_active");
    }

    modalClose.forEach(elem => {
        elem.onclick = function () {
            modalMain.classList.remove("modal_active");
            modalSuccess.classList.remove("modal_active");
        }
    });
})()