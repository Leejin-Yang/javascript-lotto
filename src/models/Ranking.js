const { RANK_COUNT, RANK } = require('../constants/rank');

class Ranking {
  #matchCount;

  constructor(matchCount) {
    this.#matchCount = matchCount;
  }

  match(bonus) {
    if (this.#isSecondRank(bonus)) return RANK.SECOND;

    return (
      {
        [RANK_COUNT.FIFTH]: RANK.FIFTH,
        [RANK_COUNT.FOURTH]: RANK.FOURTH,
        [RANK_COUNT.THIRD]: RANK.THIRD,
        [RANK_COUNT.FIRST]: RANK.FIRST,
      }[this.#matchCount] ?? undefined
    );
  }

  #isSecondRank(bonus) {
    return this.#matchCount === RANK_COUNT.THIRD && bonus;
  }
}

module.exports = Ranking;
