const { RULE, ERROR_MESSAGE } = require('../constants/lotto');

class Money {
  #money;

  constructor(money) {
    Money.#validate(money);
    this.#money = money;
  }

  static #validate(money) {
    if (!Money.#isValid(money)) {
      throw new Error(ERROR_MESSAGE.RULE_MONEY);
    }
  }

  static #isValid(money) {
    return money % RULE.MONEY_UNIT === 0;
  }

  getMoney() {
    return this.#money;
  }

  count() {
    return this.#money / RULE.MONEY_UNIT;
  }
}

module.exports = Money;
