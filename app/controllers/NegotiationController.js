class NegotiationController {
  /**
   * @typedef {Object} Inputs
   * @property {HTMLInputElement|null} inputDate
   * @property {HTMLInputElement|null} inputQuantity
   * @property {HTMLInputElement|null} inputValue
  */

  /** @type {Inputs} */
  #inputs = {
    inputDate: null,
    inputQuantity: null,
    inputValue: null,
  };

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
      this.#inputs['input' + input.id[0].toUpperCase() + input.id.slice(1)] = input;
    }

    this.#inputs.inputDate.focus();
    this.#view.update(this.#list);
  }
  /**
   * Adds a new negotiation in the table
   * @param {SubmitEvent} event 
   */
  add (event) {
    event.preventDefault();

    const negotiation = new Negotiation({
      date: DateHelper.stringToDate(this.#inputs.inputDate.value),
      value: this.#inputs.inputValue.value,
      quantity: this.#inputs.inputQuantity.value,
    });

    this.#list.add(negotiation);
    alert('The negotiation was added successfully');
    this.#view.update(this.#list);
    this.#cleanForm();
  }

  #cleanForm () {
    this.#inputs.inputDate.value = '';
    this.#inputs.inputQuantity.value = 1;
    this.#inputs.inputValue.value = 0.0;
    this.#inputs.inputDate.focus();
  }
}
