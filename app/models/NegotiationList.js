/**
 * Data structure for saving `Negotiations` with specific rules
 * @class
 */
class NegotiationList {
  #negotiations;
  #trap;

  /**
   * @constructor
   * @param {object} param 
   * @param {Function} param.trap 
   */
  constructor ({ trap }) {
    this.#negotiations = [];
    this.#trap = trap;
  }

  /** Clears the negotiation list */
  clear () {
    this.#negotiations = [];
    this.#trap(this);
  }

  /**
   * Saves a negotiation
   * @param {Negotiation} negotiation 
   */
  add (negotiation) {
    this.#negotiations.push(negotiation);
    this.#trap(this);
  }

  /**
   * @returns {Array<Negotiation>}
   */
  get negotiations () {
    return [].concat(this.#negotiations);
  }
}
