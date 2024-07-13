interface NegotiationProps {
  date: Date,
  quantity: number,
  value: number,
}

class Negotiation {
  constructor(private readonly props: NegotiationProps) {
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

  show(): NegotiationProps {
    return { ...this.props };
  }
}

export { Negotiation };
