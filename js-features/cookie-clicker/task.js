const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const clickInSeconds = document.getElementById("click__inseconds");
const standartWidth = cookie.width;

let startTime;
let count = 0;

cookie.onclick = function() {
    count++;
    if (count == 1) {startTime = new Date();} //записываем время первого нажатия

    const lastClickTime = new Date(); //создаем при каждом клике новое время нажатия
    const difTime = (lastClickTime - startTime) / 1000; //считаем разницу между стартом и последним кликом в сек

    clickerCounter.textContent = count;
    clickInSeconds.textContent = (difTime == 0) ? 0 : (count / difTime).toFixed(2);
    cookie.width = (cookie.width == standartWidth) ? 180 : standartWidth; //меняем размер
}
