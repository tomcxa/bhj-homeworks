const signIn = document.getElementById('signin');
const signInForm = document.getElementById('signin__form');

if (localStorage.getItem('id')) {
    const id = localStorage.getItem('id');
    welcome(id);
} else {
    signIn.classList.add('signin_active');
}


async function auth(url, data) {
    const response = await fetch(url, data);

    const json = await response.json();
    if (response.ok) {
        const success = json.success;
        if (success) {
            const id = json.user_id;
            welcome(id);
            localStorage.setItem('id', id);
        } else {
            alert('Неверный логин или пароль');
        }
    } else {
        alert(response.statusText);
    }
}

function welcome(id) {
    signIn.classList.remove('signin_active');
    const welcome = document.getElementById('welcome');
    const userId = document.getElementById('user_id');
    userId.textContent = id;
    welcome.classList.add('welcome_active');
}

signInForm.addEventListener('submit', e => {
    e.preventDefault();    
    const formData = new FormData(signInForm);
    auth('https://netology-slow-rest.herokuapp.com/auth.php', {method: 'POST', body: formData});
});


