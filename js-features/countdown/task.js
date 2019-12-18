'use strict';

const timer = document.getElementById("timer");
let [hh, mm, ss] = timer.textContent.split(':'); //извлекаем (по хипстерски) часы, минуты и секунды в соответствующие переменные
let time = new Date(0, 0, 0, hh, mm, ss); //создаем дату куда записываем эти значения

const updateTimer = window.setInterval(() => {
    ss--; //вычетаем секунду раз в секунду
    time = new Date(0, 0, 0, hh, mm, ss); //перезаписываем время и радуемся тому что достаточно менять только секунды
    timer.textContent = time.toLocaleTimeString(); //возвращаем формат hh:mm:ss в таймер
    if (timer.textContent == "00:00:00") {
        window.clearInterval(updateTimer); //останавливаем интервал
        alert("Вы победили в конкурсе!");
        window.location.href = "http://www.mozilla.org";
    }
}, 1000);