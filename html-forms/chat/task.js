class Chat {
    constructor() {
        [this.chatWidgetSide] = [...document.getElementsByClassName('chat-widget__side')],
        [this.chatWidget] = [...document.getElementsByClassName('chat-widget')],
        [this.chatContainer] = [...this.chatWidget.getElementsByClassName('chat-widget__messages-container')],
        this.chatWidgetInput = document.getElementById('chat-widget__input'),
        this.chatWidgetMessages = document.getElementById('chat-widget__messages');
        this.timeout = null;

        this.registerEvents();
    }
    
    registerEvents() {
        //открываем чат
        this.chatWidgetSide.onclick = () => this.chatWidget.classList.add('chat-widget_active');
        //напоминаем о разговоре для теста через 5сек
        this.chatWidgetInput.onfocus = () => 
            this.timeout = setTimeout(() => 
                this.getAnswer('Ты че уснул?'), 5000);

        document.addEventListener('keypress', (event) => {
            clearTimeout(this.timeout);
            if (event.code == "Enter" && this.chatWidgetInput.value.trim()) {
                const date = new Date().toLocaleTimeString();
                this.chatWidgetMessages.innerHTML +=
                    `<div class="message message_client">
                        <div class="message__time">${date}</div>
                        <div class="message__text">${this.chatWidgetInput.value}</div>
                    </div>`;
                this.chatWidgetInput.value = '';
                setTimeout(() => this.getAnswer(), 500) //иммитируем задержку ответа
                this.autoscroll();
            }
        });
    }

    autoscroll() {
        const bottom = this.chatContainer.getBoundingClientRect().bottom;
        this.chatContainer.scroll(0, bottom);
    }

    getAnswer(remind) {
        const botAnswers = [
            'Кого чего?',
            'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
            '🖕',
            'Вы не купили ни одного товара, чтобы так с нами разговаривать!',
            'Где ваша совесть',
            'Мы ничего не будем вам продавать',
            'Не пишите нам больше.',
            'Опять беспокоят по пустякам... Руки бы вам оторвать!',
        ];
        const date = new Date().toLocaleTimeString();
        let index = Math.floor(Math.random() * botAnswers.length);

        this.chatWidgetMessages.innerHTML +=
            `<div class="message">
                <div class="message__time">${date}</div>
                <div class="message__text">${remind || botAnswers[index]}</div>
            </div>`;
        
        this.autoscroll();
    }
}

const go = new Chat();