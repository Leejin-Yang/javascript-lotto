const { ERROR_MESSAGE } = require('../constants/lotto');

class WinningLotto {
  #lotto;

  #bonus;

  constructor(lotto, bonus) {
    WinningLotto.#validate(lotto, bonus);
    this.#lotto = lotto;
    this.#bonus = bonus;
  }

  static #validate(lotto, bonus) {
    if (lotto.contains(bonus.getBonus())) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_BONUS);
    }
  }

  matchCount(buyerLotto) {
    return this.#lotto.matchCount(buyerLotto);
  }

  isIncludeBonus(buyerLotto) {
    return this.#bonus.contains(buyerLotto);
  }
}

module.exports = WinningLotto;
