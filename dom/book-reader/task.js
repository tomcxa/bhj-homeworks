document.addEventListener('DOMContentLoaded', () => {
    const book = document.getElementById('book'),
        [bookControlFontSize] = [...document.getElementsByClassName('book__controls')],
        [bookControlColor] = [...document.getElementsByClassName('book__control_color')],
        [bookControlBackground] = [...document.getElementsByClassName('book__control_background')];
    //обработка переключателя размера шрифта
    bookControlFontSize.addEventListener('click', event => {
        event.preventDefault();

        if (event.target.classList.contains('font-size')) {
            const fontSizes = bookControlFontSize.getElementsByClassName('font-size'),
                selectedSize = event.target.dataset.size;//получаем выбранный размеры
            //для каждого элемента меняющего размер
            for (const fontSize of fontSizes) {
                const fs = fontSize.dataset.size; //определяем размер шрифта записанный в дата атрибутах
                book.classList.remove(`book_fs-${fs}`);//очищаем все размеры что были
                fontSize.classList.remove('font-size_active');//и все активные элементы тоже
            }

            event.target.classList.add('font-size_active');//устанавливаем новый активный элемент

            if (selectedSize) {
                book.classList.add(`book_fs-${selectedSize}`);//устанавливаем шрифт
            }
        }
    });
    //обработка переключателя цвета текста
    bookControlColor.addEventListener('click', event => {
        if (event.target.classList.contains('color')) {
            const textColors = bookControlColor.getElementsByClassName('color'),
                selectedColor = event.target.dataset.color;//получаем выбранный цвет
            //для каждого элемента меняющего цвет текста
            for (const color of textColors) {
                const tc = color.dataset.color; //определяем цвет записанный в дата атрибутах
                book.classList.remove(`book_color-${tc}`);//и очищаем все цвета что были
                color.classList.remove('color_active');//и все активные элементы тоже
            }

            event.target.classList.add('color_active');//устанавливаем новый активный элемент

            if (selectedColor) {
                book.classList.add(`book_color-${selectedColor}`);//устанавливаем цвет текста
            }
        }
    });
    //обработка переключателя цвета фона
    bookControlBackground.addEventListener('click', event => {
        if (event.target.classList.contains('color')) {
            const bgColors = bookControlBackground.getElementsByClassName('color'),
                selectedColor = event.target.dataset.color;//получаем выбранный цвет фона
            //для каждого элемента меняющего цвет фона
            for (const color of bgColors) {
                const bc = color.dataset.color; //определяем цвет записанный в дата атрибутах
                book.classList.remove(`book_bg-${bc}`);//и очищаем все цвета что были
                color.classList.remove('color_active');//и все активные элементы тоже
            }

            event.target.classList.add('color_active');//устанавливаем новый активный элемент

            if (selectedColor) {
                book.classList.add(`book_bg-${selectedColor}`);//устанавливаем цвет фона
            }
        }
    });
});