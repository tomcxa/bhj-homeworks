(function() {
    const tabs = document.getElementById('tabs1'); 
        
    tabs.addEventListener('click', (event) => {       

        if (event.target.classList.contains('tab')) {//если тыкнули в нужную область
            const tab = [...tabs.getElementsByClassName('tab')],
                tabContent = [...tabs.getElementsByClassName('tab__content')];
             
            tab.forEach((elem, i) => {//проверяем активные элементы и очищаем их
                if (elem.classList.contains('tab_active')) {
                    elem.classList.remove('tab_active');
                    tabContent[i].classList.remove("tab__content_active");
                }
            });
            //переназначаем активные элементы
            event.target.classList.add('tab_active');
            tabContent[tab.indexOf(event.target)].classList.add("tab__content_active");
        }
    });
})();