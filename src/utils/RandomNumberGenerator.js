const { Random } = require('@woowacourse/mission-utils');
const { RULE } = require('../constants/lotto');

const RandomNumberGenerator = {
  generate() {
    const numbers = Random.pickUniqueNumbersInRange(RULE.RANGE_START, RULE.RANGE_END, RULE.LENGTH);
    return numbers.sort((a, b) => a - b);
  },
};

module.exports = RandomNumberGenerator;
