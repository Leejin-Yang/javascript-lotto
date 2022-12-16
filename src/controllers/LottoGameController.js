const { Console } = require('@woowacourse/mission-utils');
const { ERROR_MESSAGE } = require('../constants/lotto');
const { RANK } = require('../constants/rank');

const Bonus = require('../models/Bonus');
const Lotto = require('../models/Lotto');
const Money = require('../models/Money');
const Ranking = require('../models/Ranking');
const Result = require('../models/Result');
const WinningLotto = require('../models/WinnigLotto');
const LottoMachine = require('../utils/LottosMaker');
const RandomNumberGenerator = require('../utils/RandomNumberGenerator');
const { readMoney, readLottoNumbers, readBonusNumber } = require('../views/InputView');
const { printError, printLottos, printResult } = require('../views/OutputView');

class LottoGameController {
  #money;

  #lottos;

  #lotto;

  start() {
    readMoney(this.#onMoneySubmit.bind(this));
  }

  #onMoneySubmit(input) {
    try {
      LottoGameController.#validateNumberInput(input);
      this.#money = new Money(+input);
      this.#lottos = LottoMachine.issueLottos(this.#money.count(), RandomNumberGenerator.generate);
      printLottos(this.#money.count(), this.#lottos.toString());
      readLottoNumbers(this.#onLottoNumbersSubmit.bind(this));
    } catch (error) {
      LottoGameController.#runError(error);
    }
  }

  #onLottoNumbersSubmit(input) {
    try {
      const lottoNumbers = input.split(',').map((number) => {
        LottoGameController.#validateNumberInput(number);
        return +number;
      });
      this.#lotto = new Lotto(lottoNumbers);
      readBonusNumber(this.#onBonusNumberSubmit.bind(this));
    } catch (error) {
      LottoGameController.#runError(error);
    }
  }

  #onBonusNumberSubmit(input) {
    try {
      LottoGameController.#validateNumberInput(input);
      const bonus = new Bonus(+input);
      const winningLotto = new WinningLotto(this.#lotto, bonus);
      const result = new Result(this.#getResult(winningLotto));
      printResult(result, this.#money.getMoney());
      Console.close();
    } catch (error) {
      LottoGameController.#runError(error);
    }
  }

  #getResult(winningLotto) {
    const initResult = {
      [RANK.FIFTH]: 0,
      [RANK.FOURTH]: 0,
      [RANK.THIRD]: 0,
      [RANK.SECOND]: 0,
      [RANK.FIRST]: 0,
    };

    return this.#lottos.getLottos().reduce((acc, cur) => {
      const matchCount = winningLotto.matchCount(cur);
      const ranking = new Ranking(matchCount);
      const rank = ranking.match(winningLotto.isIncludeBonus(cur));

      if (rank) acc[rank] += 1 || 1;

      return acc;
    }, initResult);
  }

  static #runError(error) {
    printError(error);
    Console.close();
  }

  static #validateNumberInput(input) {
    if (input === '') {
      throw new Error(ERROR_MESSAGE.EMPTY);
    }

    if (input.includes(' ')) {
      throw new Error(ERROR_MESSAGE.SPACE);
    }

    if (isNaN(input)) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }
  }
}

module.exports = LottoGameController;
