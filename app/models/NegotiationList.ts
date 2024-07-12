import { Negotiation } from "./Negotiation.ts";

/**
 * Data structure for saving `Negotiations` with specific rules
 */
class NegotiationList {
  private negotiationsList: Array<Negotiation>;

  constructor () {
    this.negotiationsList = [];
  }

  /** Clears the negotiation list */
  clear(): void {
    this.negotiationsList = [];
  }

  /**
   * Saves a negotiation
   */
  add(negotiation: Negotiation): void {
    this.negotiations.push(negotiation);
  }

  /**
   * @returns {Array<Negotiation>}
   */
  get negotiations(): Array<Negotiation> {
    return [].concat(this.negotiationsList);
  }
}

export { NegotiationList };
