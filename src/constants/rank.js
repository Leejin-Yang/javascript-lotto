const RANK = Object.freeze({
  FIFTH: 'FIFTH',
  FOURTH: 'FOURTH',
  THIRD: 'THIRD',
  SECOND: 'SECOND',
  FIRST: 'FIRST',
});

const RANK_COUNT = Object.freeze({
  FIFTH: 3,
  FOURTH: 4,
  THIRD: 5,
  FIRST: 6,
});

const RANK_REWARDS = Object.freeze({
  FIFTH: 5_000,
  FOURTH: 50_000,
  THIRD: 1_500_000,
  SECOND: 30_000_000,
  FIRST: 2_000_000_000,
});

const RANK_MESSAGE = Object.freeze({
  FIFTH: `${RANK_COUNT.FIFTH}개 일치 (${RANK_REWARDS.FIFTH.toLocaleString()}원) -`,
  FOURTH: `${RANK_COUNT.FOURTH}개 일치 (${RANK_REWARDS.FOURTH.toLocaleString()}원) -`,
  THIRD: `${RANK_COUNT.THIRD}개 일치 (${RANK_REWARDS.THIRD.toLocaleString()}원) -`,
  SECOND: `${
    RANK_COUNT.THIRD
  }개 일치, 보너스 볼 일치 (${RANK_REWARDS.SECOND.toLocaleString()}원) -`,
  FIRST: `${RANK_COUNT.FIRST}개 일치 (${RANK_REWARDS.FIRST.toLocaleString()}원) -`,
});

module.exports = { RANK, RANK_COUNT, RANK_REWARDS, RANK_MESSAGE };
