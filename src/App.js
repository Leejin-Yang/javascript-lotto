const LottoGameController = require('./controllers/LottoGameController');

class App {
  #controller;

  play() {
    this.#controller = new LottoGameController();
    this.#controller.start();
  }
}

module.exports = App;
