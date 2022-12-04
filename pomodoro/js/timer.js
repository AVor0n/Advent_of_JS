export class Timer extends EventTarget {
  time;
  #timerId;

  /**
   * Создает таймер. Можно задать начальное значение времени, по-умолчанию 00:00
   * @param {number} minutes начальное количество минут
   * @param {number} seconds начальное количество секунд
   */
  constructor(minutes = 0, seconds = 0) {
    super();
    this.#setTime(minutes, seconds);
  }

  /**
   * Запускает таймер
   * @param {number} step - шаг таймера в мс. По-умолчанию 1000мс = 1секунда
   */
  start(step = 1000) {
    if (typeof step !== "number") throw new TypeError("Ожидался тип number");
    if (step <= 0) throw new RangeError("Ожидалось число > 0");

    this.dispatchEvent(new Event("start"));
    if(this.time <= 0){
      this.#timerId = null;
      this.dispatchEvent(new Event("stop"));
    } else{
      this.#timerId = setTimeout(() => {
        this.#tick(step);
      }, step);
    }
  }

  #tick(step){
    this.time -= step;
    this.dispatchEvent(new Event("tick"));
    if (this.time <= 0) {
      this.time = 0;
      this.#timerId = null;
      this.dispatchEvent(new Event("stop"));
    }else{
      this.#timerId = setTimeout(() => this.#tick(step), step);
    }
  }

  /** Останавливает таймер */
  stop() {
    clearTimeout(this.#timerId);
    this.#timerId = null;
    this.dispatchEvent(new Event("pause"));
  }

  /** Количество миллисекунд оставшихся до срабатывания таймера */
  get time() {
    return this.time;
  }

  /**
   * Устанавливает новое время таймера
   * @param {number} min минуты
   * @param {number} sec секунды
   */
  #setTime(min, sec) {
    this.time = min * 60000 + sec * 1000;
  }

  /** Количество минут, отображаемых на таймере */
  get minutes() {
    return Math.trunc(this.time / 60000);
  }

  /**
   * Устанавливает минуты на таймере
   * @param {number} min
   */
  set minutes(min) {
    if (typeof min !== 'number') {
      throw new TypeError("Ожидался тип number");
    }
    if (min < 0 || min > 99)
      throw new RangeError("Ожидалось число в диапазоне 0...99");

    this.#setTime(min, this.seconds);
  }

  /** Количество секунд, отображаемых на таймере */
  get seconds() {
    return Math.trunc(this.time / 1000) % 60;
  }

  /**
   * Устанавливает секунды на таймере
   * @param {number} sec
   */
  set seconds(sec) {
    if (typeof sec !== 'number') throw new TypeError("Ожидался тип number");
    if (sec < 0 || sec > 99)
      throw new RangeError("Ожидалось число в диапазоне 0...59");

    this.#setTime(this.minutes, sec);
  }

  /** Возвращает состояние таймера 'run' | 'stop' */
  get status(){
    return this.#timerId ? 'run' : 'stop';
  }

  toString() {
    return [this.minutes, this.seconds]
      .map(it => it.toString().padStart(2, "0"))
      .join(":");
  }
}
