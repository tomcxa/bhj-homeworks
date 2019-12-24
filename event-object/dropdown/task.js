(function () {
    
    const dropdown = [...document.getElementsByClassName("dropdown")];

    dropdown.forEach(menu => {

        const [dropdownValue] = [...menu.getElementsByClassName("dropdown__value")];

        dropdownValue.addEventListener('click', () => {
            const [dropdownList] = [...menu.getElementsByClassName("dropdown__list")],
                dropdownLink = [...menu.getElementsByClassName("dropdown__link")];

            dropdownList.classList.toggle('dropdown__list_active');

            dropdownLink.forEach(link => {
                link.addEventListener('click', (event) => {     
                    event.preventDefault();       
                    dropdownList.classList.remove('dropdown__list_active');
                    dropdownValue.textContent = link.textContent;
                });
            });
        });
    });
})();