import { NegotiationList } from "./negotiation-list.model.js";
import { NegotiationEntity } from "./negotiation.entity.js";
import { Negotiation } from "./negotiation.model.js";

class NegotiationService {
  constructor(private readonly negotiationList: NegotiationList) {}

  add(negotiation: Negotiation): void {
    this.negotiationList.add(
      new NegotiationEntity({
        date: negotiation.date,
        quantity: negotiation.quantity,
        value: negotiation.value,
        volume: negotiation.value * negotiation.quantity,
      })
    );
  }

  clear(): void {
    this.negotiationList.clear();
  }
};

export { NegotiationService };
