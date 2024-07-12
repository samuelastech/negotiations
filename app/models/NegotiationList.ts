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
    this.negotiationsList.push(negotiation);
  }

  /**
   * Lists negotiations
   */
  get negotiations(): ReadonlyArray<Negotiation> {
    return this.negotiationsList;
  }
}

export { NegotiationList };
