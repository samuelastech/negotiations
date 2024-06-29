/**
 * Data structure for saving `Negotiations` with specific rules
 * @class
 */
class NegotiationList {
  #negotiations;

  constructor () {
    this.#negotiations = [];
  }

  /** Clears the negotiation list */
  clear () {
    this.#negotiations = [];
  }

  /**
   * Saves a negotiation
   * @param {Negotiation} negotiation 
   */
  add (negotiation) {
    this.#negotiations.push(negotiation);
  }

  /**
   * @returns {Array<Negotiation>}
   */
  get negotiations () {
    return [].concat(this.#negotiations);
  }
}
