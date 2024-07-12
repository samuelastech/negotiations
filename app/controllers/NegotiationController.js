import { Bind, DateHelper } from '../helpers/index.js';

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

  /**
   * @typedef {Object} Views
   * @property {NegotiationsView|null} NegotiationsView
  */

   /** @type {Views} */
  #views = {
    NegotiationsView: null,
  };

  /**
   * @typedef {Object} Models
   * @property {Negotiation|null} Negotiation
   * @property {NegotiationList|null} NegotiationList
  */

   /** @type {Models} */
  #models = {
    Negotiation: null,
    NegotiationList: null,
  };

  /**
   * Gets DOM elements
   * @constructor
   * @param {object} param
   * @param {NegotiationList} param.list
   * @param {NegotiationsView} param.view
   */
  constructor ({ views, models }) {
    this.#saveDependencies(views, models);
    this.#saveInputs();

    this.#models.NegotiationList = new Bind({
      model: new this.#models.NegotiationList(),
      view: new this.#views.NegotiationsView({
        element: document.querySelector('#negotiations'),
      }),
      props: ['add', 'clear'],
    });

    this.#inputs.inputDate.focus();
  }

  #saveDependencies (views, models) {
    for (const view of views) {
      this.#views[view.name] = view;
    }

    for (const model of models) {
      this.#models[model.name] = model; 
    }
  }

  #saveInputs () {
    const inputs = document.querySelectorAll('input[id]');

    for (const input of inputs) {
      this.#inputs['input' + input.id[0].toUpperCase() + input.id.slice(1)] = input;
    }
  }

  /**
   * Clears the negotiation table
   */
  clear () {
    this.#models.NegotiationList.clear();
    alert('The negotiations was deleted');
  }

  /**
   * Adds a new negotiation in the table
   * @param {SubmitEvent} event 
   */
  add (event) {
    event.preventDefault();

    const negotiation = new this.#models.Negotiation({
      date: DateHelper.stringToDate(this.#inputs.inputDate.value),
      value: this.#inputs.inputValue.value,
      quantity: this.#inputs.inputQuantity.value,
    });

    this.#models.NegotiationList.add(negotiation);
    alert('The negotiation was added successfully');
    this.#cleanForm();
  }

  #cleanForm () {
    this.#inputs.inputDate.value = '';
    this.#inputs.inputQuantity.value = 1;
    this.#inputs.inputValue.value = 0.0;
    this.#inputs.inputDate.focus();
  }
}

export { NegotiationController };
