const url = 'https://netology-slow-rest.herokuapp.com/poll.php';

async function get() {//get запрос
    const responseGet = await fetch(url);

    if (responseGet.ok) {
        const json = await responseGet.json();
        const renderData = getData(json.data);
        const answerID = json.id;

        renderPoll(renderData);
        getUserAnswer(answerID);

    } else {
        alert("Чет случилось:" + responseGet.statusText);
    }
}

get();

async function post(answerID, userAnswerIndex) {//пост запрос

    const responsePost = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `vote=${answerID}&answer=${userAnswerIndex}`
    });

    if (responsePost.ok) {
        const json = await responsePost.json();
        renderStat(json.stat);
    } else {
        alert("Чет случилось:" + responsePost.statusText);
    }  
}

function getData(data) {//обрабатываем гет данные
    const renderData = [];
    const question = data['title'];
    const answers = data['answers'];

    renderData.push({ question, answers });

    return renderData;
}

function renderPoll(renderData) {//формируем из гет данных страницу
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');

    renderData.forEach(obj => {
        const question = obj.question;
        const answers = obj.answers;

        let template = "";

        answers.forEach(answer => {
            template +=
                `<button class="poll__answer">
                    ${answer}
                </button>`;
        })

        pollTitle.textContent = question;
        pollAnswers.innerHTML = template;
    });
}

function getUserAnswer(answerID) {//обрабатываем ответ пользователя
    const pollAnswers = document.getElementById('poll__answers');
    let userAnswerIndex;

    pollAnswers.addEventListener('click', e => {
        const buttons = pollAnswers.getElementsByClassName('poll__answer');

        if (e.target.classList.contains('poll__answer')) {
            userAnswerIndex = [...buttons].indexOf(e.target);
            pollAnswers.classList.remove("poll__answers_active");
            alert("Пасиб");
            post(answerID, userAnswerIndex);
        }
    });
}

function renderStat(stat) {//формируем статистику для показа
    const pollStats = document.querySelector('.poll__stats');
    const votesAll = stat.reduce((prev, current) => (prev + current.votes), 0);
    let template = "";
    
    const statWithPercent = stat.map(obj => {
        obj.votes = ((obj.votes * 100) / votesAll).toFixed(2);
        return obj;
    });

    statWithPercent.forEach(stat => {
        const {answer, votes} = stat;

        template += `<div class="poll__stat">${answer}: ${votes}%</div>`;
    });

    pollStats.innerHTML = template;
    pollStats.classList.add('poll__stats_active');
}