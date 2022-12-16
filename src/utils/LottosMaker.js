const Lottos = require('../models/Lottos');

const LottoMachine = {
  issueLottos(count, generateRandomNumber) {
    const lottos = new Array(count).fill(0).map(() => generateRandomNumber());
    return new Lottos(lottos);
  },
};

module.exports = LottoMachine;
