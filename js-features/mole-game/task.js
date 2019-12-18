const dead = document.getElementById("dead"),
    lost = document.getElementById("lost"),
    getHole = index => document.getElementById(`hole${index}`);


for(let index = 1; index < 10; index++) {
    getHole(index).onclick = function() {
        //проверяем попадания
        if(getHole(index).classList.contains('hole_has-mole')) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }
        //проверяем победу
        if(dead.textContent == 10) {
            alert("Поздравляем с победой!");
            dead.textContent = 0;
            lost.textContent = 0;
        }
        //проверяем поражение
        if(lost.textContent == 5) {
            alert("В следующий раз повезет...");
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}
