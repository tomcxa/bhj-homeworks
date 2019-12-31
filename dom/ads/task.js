document.addEventListener('DOMContentLoaded', function () {
    const rotator = [...document.getElementsByClassName('rotator')];

    rotator.forEach(el => {//для каждого ротатора
        const rotatorCases = [...el.getElementsByClassName('rotator__case')];//создаем массив элементов
        //присваиваем переменным значения по умолчанию
        let currentCaseIndex = 0,
            delay = rotatorCases[currentCaseIndex].dataset.speed;
        //устанавливаем цвет    
        rotatorCases[currentCaseIndex].style.color = rotatorCases[currentCaseIndex].dataset.color;
        
        function rotate() {//функция переключения кэйсов
            
            rotatorCases[currentCaseIndex].classList.remove('rotator__case_active');//удаляем активный элемент

            if (++currentCaseIndex == rotatorCases.length) {//если элементы кончились
                currentCaseIndex = 0;//начинаем заного
            }
            // обновляем цвет
            rotatorCases[currentCaseIndex].style.color = rotatorCases[currentCaseIndex].dataset.color;
            delay = rotatorCases[currentCaseIndex].dataset.speed;// обновляем задержку            
            rotatorCases[currentCaseIndex].classList.add('rotator__case_active');//меняем активный элемент
        }
        //запускаем отсчет для каждого элемента
        setTimeout(rotate, delay);
    });
});