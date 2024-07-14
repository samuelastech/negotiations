import { Negotiation } from "./negotiation.model.js";
import { Model } from "../common/index.js";

/**
 * Data structure for saving `Negotiations` with specific rules
 */
class NegotiationList implements Model {
  private list: Negotiation[] = [];

  /**
   * Clears the negotiation list
   */
  clear(): void {
    this.list = [];
  }

  /**
   * Saves a negotiation
   */
  add(negotiation: Negotiation): void {
    this.list.push(negotiation);
  }

  /**
   * Lists negotiations
   */
  get negotiations(): readonly Negotiation[] {
    return this.list;
  }
}

export { NegotiationList };
