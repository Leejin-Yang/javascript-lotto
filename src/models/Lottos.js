class Lottos {
  #lottos;

  constructor(lottos) {
    this.#lottos = lottos;
  }

  getLottos() {
    return this.#lottos;
  }

  toString() {
    return this.#lottos.map((lotto) => `[${lotto.join(', ')}]`).join('\n');
  }
}

module.exports = Lottos;
