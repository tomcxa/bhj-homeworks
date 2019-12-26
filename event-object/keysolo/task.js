class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timer = container.querySelector('.status__timer');//блок таймера
    this.startInterval = true;//считаем нажатия
    this.interval;//будующий интервал

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */

    window.addEventListener('keypress', (event) => {
      const char = event.code.substring(3).toLowerCase(),
        currentChar = this.currentSymbol.textContent;

      if (this.startInterval) {
        this.interval = setInterval(() => {
          if (--this.timer.textContent == 0) {//Осторожно! двойной фэил возможен если при таймере 0 еще нажать не ту букву
            this.fail();
          }
        }, 1000);
      }

      this.startInterval = false;

      if (char === currentChar) {
        this.success();
      } else {
        this.fail();
      }
    });
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    clearInterval(this.interval);//если меняем слово сбрасываем таймер
    this.startInterval = true;; //и сбрасываем таймер
    const word = this.getWord();
    this.timer.textContent = word.length;//устанавливаем значение таймера
    this.renderWord(word);
  }

  getWord() {
    const words = [
      'bob',
      'awesome',
      'netology',
      'hello',
      'kitkat',
      'rock',
      'youtube',
      'popcorn',
      'cinema',
      'love',
      'javascript'
    ],
      index = Math.floor(Math.random() * words.length);

    return words[index].toLowerCase();
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

