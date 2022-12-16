const { RULE, ERROR_MESSAGE } = require('../constants/lotto');

class Bonus {
  #bonus;

  constructor(number) {
    Bonus.#validate(number);
    this.#bonus = number;
  }

  static #validate(number) {
    if (Bonus.#isNumberOutOfRange(number)) {
      throw new Error(ERROR_MESSAGE.RULE_RANGE);
    }
  }

  static #isNumberOutOfRange(number) {
    return number < RULE.RANGE_START || number > RULE.RANGE_END;
  }

  getBonus() {
    return this.#bonus;
  }

  isInclude(buyerLotto) {
    return buyerLotto.includes(this.#bonus);
  }
}

module.exports = Bonus;
