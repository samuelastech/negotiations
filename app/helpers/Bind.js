class Bind {
  /**
   * Creates an association between a `model` and a `view` triggering an action when a `props` is called
   * @param {object} param 
   * @param {object} param.model 
   * @param {object} param.view
   * @param {Array<string>} param.props
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