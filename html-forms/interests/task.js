const interestsMain = document.getElementsByClassName('interests_main');

[...interestsMain].forEach( element => {
    element.addEventListener('change', event => {
        const target = event.target.closest('.interest');
        const childrenList = target.getElementsByClassName('interests');
        const parentCheckbox = target.querySelector('.interest__check');

        [...childrenList].forEach(interests => {
            const checkBoxes = [...interests.getElementsByClassName('interest__check')];
            checkBoxes.forEach(input => {
                if (parentCheckbox.checked) {
                    input.checked = true;
                } else {
                    input.checked = false;
                }
            });
        });
    });
});