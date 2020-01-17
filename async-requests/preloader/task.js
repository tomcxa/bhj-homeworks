const url = 'https://netology-slow-rest.herokuapp.com';

async function getValute(url) {
    const response = await fetch(url);

    if (response.ok) {
        const json = await response.json();
        const valute = json.response.Valute;
        const renderData = getData(valute);
        renderExchangeRate(renderData);
    } else {
        alert("Чет случилось:" + response.statusText);
    }
}

function getData(data) {
    const renderData = [];
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const abbrev = data[key]['CharCode'];
            const curentValue = data[key]['Value'];
            renderData.push({abbrev, curentValue});
        }
    }
    return renderData;
}

function renderExchangeRate(renderData) {
    const items = document.getElementById('items');
    const preloader = document.getElementById('loader');
    let template = '';

    renderData.forEach(element => {//сначала генерируем шаблон
        const {abbrev, curentValue} = element;
        
        template += 
            `<div class="item">
                <div class="item__code">
                    ${abbrev}
                </div>
                <div class="item__value">
                    ${curentValue}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>`;
    });

    items.innerHTML = template;//и рисуем страницу 1 раз
    preloader.classList.remove('loader_active');
}

getValute(url);
