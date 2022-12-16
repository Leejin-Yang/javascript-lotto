const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../constants/lotto');

const OutputView = {
  printEmptyLine() {
    Console.print('');
  },

  printLottos(count, lottos) {
    Console.print(`${GAME_MESSAGE.BUY_COUNT(count)}`);
    Console.print(lottos);
  },

  printResultTitle() {
    Console.print(GAME_MESSAGE.RESULT_TITLE);
  },

  printResultTable(table) {
    Console.print(table);
  },

  printProfitRate(profitRate) {
    Console.print(GAME_MESSAGE.PROFIT_RATE(profitRate));
  },

  printResult(result, money) {
    OutputView.printResultTitle();
    OutputView.printResultTable(result.toString());
    OutputView.printProfitRate(result.calculateProfitRate(money));
  },

  printError(error) {
    OutputView.printEmptyLine();
    Console.print(error.message);
    OutputView.printEmptyLine();
  },
};

module.exports = OutputView;
