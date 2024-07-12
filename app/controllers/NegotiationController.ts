import { Bind, DateHelper } from '../helpers/index.ts';
import { Negotiation, NegotiationList } from '../models/index.ts';
import { NegotiationsView } from '../views/NegotiationsView.ts';

// type Class<T = {}> = new (...args: any[]) => void;

interface NegotiationControllerProps {
  views: any;
  models: any;
}

class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private NegotiationsView: NegotiationsView;
  private NegotiationList: NegotiationList;
  private Negotiation: Negotiation;

  constructor ({ views, models }: NegotiationControllerProps) {
    this.saveDependencies(views, models);
    this.saveInputs();

    // @ts-ignore
    this.NegotiationList = new Bind({
      // @ts-ignore
      model: new this.NegotiationList(),
      // @ts-ignore
      view: new this.NegotiationsView({
        element: document.querySelector('#negotiations'),
      }),
      props: ['add', 'clear'],
    });

    this.inputDate.focus();
  }

  private saveDependencies(views: any, models: any): void {
    for (const view of views) {
      this[view.name] = view;
    }

    for (const model of models) {
      this[model.name] = model; 
    }
  }

  private saveInputs(): void {
    const inputs = document.querySelectorAll<HTMLInputElement>('input[id]');

    for (const input of inputs) {
      this['input' + input.id[0].toUpperCase() + input.id.slice(1)] = input;
    }
  }

  /**
   * Clears the negotiation table
   */
  clear(): void {
    this.NegotiationList.clear();
    alert('The negotiations was deleted');
  }

  /**
   * Adds a new negotiation in the table
   */
  add(event: SubmitEvent) {
    event.preventDefault();

    // @ts-ignore
    const negotiation = new this.Negotiation({
      date: DateHelper.stringToDate(this.inputDate.value),
      value: this.inputValue.value,
      quantity: this.inputQuantity.value,
    });

    this.NegotiationList.add(negotiation);
    alert('The negotiation was added successfully');
    this.cleanForm();
  }

  private cleanForm(): void {
    this.inputDate.value = '';
    this.inputQuantity.value = String(1);
    this.inputValue.value = String(0.0);
    this.inputDate.focus();
  }
}

export { NegotiationController };
