import { ProxyFactory } from "../services/ProxyFactory.ts";

// type ViewType<Model> = {
//   update: (model: Model) => void;
// };

interface BindProps {
  model: any;
  view: any;
  props: Array<string>;
}

class Bind {
  /**
   * Creates an association between a `model` and a `view` triggering an action when a `props` is called
   */
  constructor({ model, view, props }: BindProps) {
    const proxy = ProxyFactory.create({
      object: model,
      props,
      action: (model: any) => {
        view.update(model);
      },
    });

    view.update(model);
    return proxy;
  }
}

export { Bind };
