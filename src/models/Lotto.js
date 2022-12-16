const { RULE, ERROR_MESSAGE } = require('../constants/lotto');

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.#validate(numbers);
    this.#numbers = numbers;
  }

  static #validate(numbers) {
    if (numbers.length !== RULE.LENGTH) {
      throw new Error(ERROR_MESSAGE.RULE_LENGTH);
    }

    if (numbers.some((number) => Lotto.#isNumberOutOfRange(number))) {
      throw new Error(ERROR_MESSAGE.RULE_RANGE);
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR_MESSAGE.DUPLICATE);
    }
  }

  static #isNumberOutOfRange(number) {
    return number < RULE.RANGE_START || number > RULE.RANGE_END;
  }

  matchCount(buyerLotto) {
    const matchingNumbers = buyerLotto.filter((number) => this.contains(number));
    return matchingNumbers.length;
  }

  contains(number) {
    return this.#numbers.includes(number);
  }
}

module.exports = Lotto;
