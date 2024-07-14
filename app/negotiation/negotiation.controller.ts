import { ElementInject, DateHelper, LogExecutionTime } from '../utils/index.js';
import { NegotiationService } from './negotiation.service.js';

class NegotiationController {
  @ElementInject('#date')
  private inputDate: HTMLInputElement;
  @ElementInject('#quantity')
  private inputQuantity: HTMLInputElement;
  @ElementInject('#value')
  private inputValue: HTMLInputElement;

  constructor(private readonly negotiationService: NegotiationService) {
    this.inputDate.focus();
  }

  /**
   * Clears the negotiation table
   */
  clear(): void {
    this.negotiationService.clear();
    alert('The negotiations was deleted');
  }

  /**
   * Adds a new negotiation in the table
   */
  @LogExecutionTime()
  add(event: SubmitEvent): void {
    event.preventDefault();
    this.negotiationService.add({
      date: DateHelper.stringToDate(this.inputDate.value),
      value: parseFloat(this.inputValue.value),
      quantity: parseInt(this.inputQuantity.value),
    });
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
