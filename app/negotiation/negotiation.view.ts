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
      <table class="app-table">
        <thead class="table-header">
          <tr class="row">
            <th class="column">Date</th>
            <th class="column">Quantity</th>
            <th class="column">Value</th>
            <th class="column">Volume</th>
          </tr>
        </thead>
        <tbody class="table-body">
          ${model.negotiations.map((negotiation) => {
            volume += negotiation.volume ? negotiation.volume : 0;
            return `
              <tr class="row">
                <td class="column">${DateHelper.dateToString(negotiation.date)}</td>
                <td class="column">${negotiation.quantity}</td>
                <td class="column">${negotiation.value}</td>
                <td class="column">${negotiation.volume}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
        <tfoot class="table-footer">
          <tr class="row">
            <td class="column" colspan="3"></td>
            <td class="column">${volume}</td>
          </tr>
        </tfoot>
      </table>
    `;
  }
}

export { NegotiationsView };
