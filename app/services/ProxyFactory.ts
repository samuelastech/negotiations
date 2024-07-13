
interface ProxyFactoryProps<Model extends object> {
  object: Model,
  props: Array<keyof Model>,
  action: Function;
}

class ProxyFactory {
  /**
   * Creates a proxy for a class/object
   */
  static create<Model extends object>({ object, props, action }: ProxyFactoryProps<Model>) {
    return new Proxy(object, {
      get: (target: Model, prop: string) => {
        if (props.includes(prop as keyof Model) && this.isFunction(target[prop] as Function)) {
          return (...args: Array<any>) => {
            Reflect.apply(target[prop] as Function, target, args);
            return action(target);
          };
        }

        return Reflect.get(target, prop, target);
      },

      set: (target: Model, prop: string, value: any) => {
        if (props.includes(prop as keyof Model)) {
          action(target);
        }

        return Reflect.set(target, prop, value, target);
      }
    });
  }

  private static isFunction(fn: Function) {
    return typeof fn === typeof Function
  }
}

export { ProxyFactory };
