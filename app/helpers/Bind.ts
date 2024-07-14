import { Model } from "../models/Model.js";
import { ProxyFactory } from "../services/ProxyFactory.js";
import { View } from "../views/View.js";

interface BindProps<Model, View> {
  model: Model;
  view: View;
  props: Array<string>;
}

class Bind {
  /**
   * Creates an association between a `model` and a `view` triggering an action when a `props` is called
   */
  static create<T extends Model>({ model, view, props }: BindProps<T, View<T>>): T {
    const proxy = ProxyFactory.create({
      object: model,
      props,
      action: (model: T) => {
        view.update(model);
      },
    });

    view.update(model);
    return proxy as T;
  }
}

export { Bind };
