import { DateHelper } from '../utils/date-helper.js';
import { NegotiationList } from './negotiation-list.model.js';

class NegotiationsView {
  private element: HTMLElement;

  /**
   * Creates a pointer to the HTML place where the table will be rendered
   */
  constructor (selector: string) {
    this.element = document.querySelector(selector) as HTMLElement;
  }

  /**
   * Re-renders the table
   */
  update(model: NegotiationList): void {
    this.element.innerHTML = this.template(model);
  }

  /**
   * Creates the table
   */
  private template(model: NegotiationList): string {
    let volume = 0;
    return `
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Quantity</th>
            <th>Value</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          ${model.negotiations.map((negotiation) => {
            volume += negotiation.volume ? negotiation.volume : 0;
            return `
              <tr>
                <td>${DateHelper.dateToString(negotiation.date)}</td>
                <td>${negotiation.quantity}</td>
                <td>${negotiation.value}</td>
                <td>${negotiation.volume}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
        <tfoot>
          <td colspan="3"></td>
          <td>${volume}</td>
        </tfoot>
      </table>
    `;
  }
}

export { NegotiationsView };