(function () {

    const menuSub = document.querySelectorAll('.menu_sub'),
        disable = () => menuSub.forEach(el => el.classList.remove('menu_active'));//функция скрытия подменю

    menuSub.forEach(el => {

        const withSubMenuLink = el.previousElementSibling; //получаем только ссылки с подменю

        withSubMenuLink.onclick = function () {
            //убираем подменю при повторном нажатии на тотже элемент
            if (el.classList.contains('menu_active')) {
                disable();
                return false;
            }

            disable();//убираем подменю

            //активируем подменю
            if (el.classList.contains('menu_sub')) {
                el.classList.toggle('menu_active');
            }

            return false;
        }
    });
})()