class NegotiationsView {
  #element;

  /**
   * Creates a pointer to the HTML place where the table will be rendered
   * @param {HTMLElement} element 
   */
  constructor (element) {
    this.#element = element;
  }

  /**
   * Re-renders the table
   * @param {NegotiationList} model 
   */
  update (model) {
    this.#element.innerHTML = this.#template(model);
  }

  /**
   * Creates the table
   * @param {NegotiationList} model
   * @returns {string}
   */
  #template (model) {
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
            volume += negotiation.volume;
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
