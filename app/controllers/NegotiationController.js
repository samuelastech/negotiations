class NegotiationController {
  /** @type {HTMLInputElement} */
  inputDate;

  /** @type {HTMLInputElement} */
  inputQuantity;

  /** @type {HTMLInputElement} */
  inputValue;

  #list;
  #view;

  /**
   * Gets DOM elements
   * @constructor
   * @param {object} param
   * @param {NegotiationList} param.list
   * @param {NegotiationsView} param.view
   */
  constructor ({ list, view }) {
    this.#list = list;
    this.#view = view;

    const inputs = document.querySelectorAll('input[id]');

    for (const input of inputs) {
      this['input' + input.id[0].toUpperCase() + input.id.slice(1)] = input;
    }

    this.inputDate.focus();
    this.#view.update(this.#list);
  }
  /**
   * Adds a new negotiation in the table
   * @param {SubmitEvent} event 
   */
  add (event) {
    event.preventDefault();

    const negotiation = new Negotiation({
      date: DateHelper.stringToDate(this.inputDate.value),
      value: this.inputValue.value,
      quantity: this.inputQuantity.value,
    });

    this.#list.add(negotiation);
    alert('The negotiation was added successfully');
    this.#view.update(this.#list);
    this.#cleanForm();
  }

  #cleanForm () {
    this.inputDate.value = '';
    this.inputQuantity.value = 1;
    this.inputValue.value = 0.0;
    this.inputDate.focus();
  }
}
