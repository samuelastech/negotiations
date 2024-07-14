import { Model } from "../models/Model.js";

interface ProxyFactoryProps<Model> {
  object: Model,
  props: Array<string>,
  action: Function;
}

class ProxyFactory {
  /**
   * Creates a proxy for a class/object
   */
  static create({ object, props, action }: ProxyFactoryProps<Model>): Model {
    return new Proxy(object, {
      get: (target: Model, prop: string) => {
        if (props.includes(prop) && this.isFunction(target, prop)) {
          return (...args: Array<any>) => {
            Reflect.apply(target[prop] as Function, target, args);
            return action(target);
          };
        }

        return Reflect.get(target, prop, target);
      },

      set: (target: Model, prop: string, value: any) => {
        if (props.includes(prop)) {
          action(target);
        }

        return Reflect.set(target, prop, value, target);
      }
    });
  }

  private static isFunction(target: Model, prop: string) {
    return typeof target[prop] === typeof Function;
  }
}

export { ProxyFactory };
