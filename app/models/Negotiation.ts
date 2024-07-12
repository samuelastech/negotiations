class Negotiation {
  #date = new Date();
  #quantity = 1;
  #value = 0.0;

  /**
   * Creates a new negotiation
   * @constructor
   * @param {object} param
   * @param {Date} param.date
   * @param {number} param.quantity
   * @param {number} param.value
   */
  constructor ({ date, quantity, value }) {
    this.#date = new Date(date.getTime());
    this.#quantity = quantity;
    this.#value = value;
    Object.freeze(this);
  }

  get date () {
    return new Date(this.#date.getTime());
  }

  get quantity () {
    return this.#quantity;
  }

  get value () {
    return this.#value;
  }

  get volume () {
    return this.#quantity * this.#value;
  }

  show () {
    return {
      date: this.#date,
      quantity: this.#quantity,
      value: this.#value,
    }
  }
}

export { Negotiation };
