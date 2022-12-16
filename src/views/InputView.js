const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../constants/lotto');

const InputView = {
  readMoney(callback) {
    Console.readLine(GAME_MESSAGE.MONEY_INPUT, callback);
  },

  readLottoNumbers(callback) {
    Console.readLine(GAME_MESSAGE.LOTTO_NUMBER_INPUT, callback);
  },

  readBonusNumber(callback) {
    Console.readLine(GAME_MESSAGE.BONUS_NUMBER_INPUT, callback);
  },
};

module.exports = InputView;
