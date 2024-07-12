interface NegotiationProps {
  date: Date,
  quantity: number,
  value: number,
}

class Negotiation {
  private dateProp = new Date();
  private quantityProp = 1;
  private valueProp = 0.0;

  constructor({ date, quantity, value }: NegotiationProps) {
    this.dateProp = new Date(date.getTime());
    this.quantityProp = quantity;
    this.valueProp = value;
    Object.freeze(this);
  }

  get date () {
    return new Date(this.dateProp.getTime());
  }

  get quantity () {
    return this.quantityProp;
  }

  get value () {
    return this.valueProp;
  }

  get volume () {
    return this.quantityProp * this.valueProp;
  }

  show () {
    return {
      date: this.dateProp,
      quantity: this.quantityProp,
      value: this.valueProp,
    }
  }
}

export { Negotiation };
