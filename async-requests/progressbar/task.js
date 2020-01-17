const input = form.querySelector('input');
input.onchange = function getFile() {
    const [file] = [...input.files];
    console.log(file);
    form.addEventListener('submit', e => {
        e.preventDefault();
        upload(file);

    });
}

function upload(file) {
    let xhr = new XMLHttpRequest();
    const progress = document.getElementById('progress');

    // отслеживаем процесс отправки
    xhr.upload.onprogress = function (event) {
        progress.value = (progress.value < 1) ? progress.value + 0.1 : 0.9;
        console.log(`Отправлено ${event.loaded} из ${event.total}`);
    };

    // Ждём завершения
    xhr.onloadend = function () {
        if (xhr.status == 200) {
            progress.value = 1;
            console.log("Успех");
        } else {
            alert("Ошибка " + this.status);
        }
    };

    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.send(file);
}