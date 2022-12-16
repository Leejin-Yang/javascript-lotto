const { GAME_MESSAGE } = require('../constants/lotto');
const { RANK_MESSAGE, RANK_REWARDS } = require('../constants/rank');

class Result {
  #result;

  constructor(result) {
    this.#result = result;
  }

  calculateProfitRate(money) {
    const totalReward = this.#calculateTotalPrize();
    const profitRate = (totalReward / money) * 100;

    return profitRate.toLocaleString(undefined, { minimumFractionDigits: 1 });
  }

  #calculateTotalPrize() {
    return Object.entries(this.#result).reduce((acc, cur) => {
      const [rank, count] = cur;
      const reward = RANK_REWARDS[rank];

      return acc + count * reward;
    }, 0);
  }

  toString() {
    return Object.entries(this.#result)
      .map(([rank, count]) => `${RANK_MESSAGE[rank]} ${GAME_MESSAGE.COUNT(count)}`)
      .join('\n');
  }
}

module.exports = Result;
