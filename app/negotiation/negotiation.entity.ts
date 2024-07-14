import { Negotiation } from "./negotiation.model.js";

/**
 * Implementation of `Negotiation`
 */
class NegotiationEntity implements Negotiation {
  constructor(private readonly props: Negotiation) {
    this.props.date = new Date(props.date.getTime());
    Object.freeze(this.props);
  }

  get date(): Date {
    return new Date(this.props.date.getTime());
  }

  get quantity(): number {
    return this.props.quantity;
  }

  get value(): number {
    return this.props.value;
  }

  get volume(): number {
    return this.props.quantity * this.props.value;
  }

  show(): Negotiation {
    return { ...this.props };
  }
}

export { NegotiationEntity };
