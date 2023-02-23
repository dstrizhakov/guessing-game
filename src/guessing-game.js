class GuessingGame {
  constructor() {}

  setRange(min, max) {
    //сохраним значения в объект для работы
    this.min = min;
    this.max = max;
  }

  guess() {
    // предлагаем кандидата из середины диапвзона
    const candidate = Math.ceil(this.min + (this.max - this.min) / 2); // c Math.floor тесты не проходит)
    this.candidate = candidate;
    console.log("Кандидат:", this.candidate);
    return candidate;
  }

  lower() {
    // если оказались тут число больше предложенного candidate
    // следовательно можно записать этого кандидата в this.min
    this.max = this.candidate;
    console.log("lower()", "Min:", this.min, "Max:", this.max);
  }

  greater() {
    // если оказались тут число меньше предложенного candidate
    // следовательно можно записать этого кандидата в this.max
    this.min = this.candidate;
    console.log("greater()", "Min:", this.min, "Max:", this.max);
  }
}

module.exports = GuessingGame;
