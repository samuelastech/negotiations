import { ProxyFactory } from "../services/ProxyFactory.js";

class Bind {
  /**
   * Creates an association between a `model` and a `view` triggering an action when a `props` is called
   * @param {object} param 
   * @param {object} param.model - the model with the props you want to intercept
   * @param {object} param.view - the view that needs some action
   * @param {Array<string>} param.props - the props you want to watch to trigger some action
   */
  constructor({ model, view, props }) {
    const proxy = ProxyFactory.create({
      object: model,
      props,
      action: (model) => {
        view.update(model);
      },
    });

    view.update(model);
    return proxy;
  }
}

export { Bind };
