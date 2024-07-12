class ProxyFactory {
  /**
   * Creates a proxy for an object
   * @param {object} param
   * @param {object} param.object - the object you want to make a proxy for
   * @param {Array<string>} param.props - the props you want to watch in the object
   * @param {Function} param.action - what to do when the props are trigerred
   */
  static create({ object, props, action }) {
    return new Proxy(object, {
      get: (target, prop) => {
        if (props.includes(prop) && this.#isFunction(target[prop])) {
          return (...args) => {
            Reflect.apply(target[prop], target, args);
            return action(target);
          };
        }

        return Reflect.get(target, prop, target);
      },

      set: (target, prop, value) => {
        if(props.includes(prop)) {
          action(target);
        }

        return Reflect.set(target, prop, value, target);
      }
    });
  }

  static #isFunction(func) {
    return typeof func === typeof Function
  }
}

export { ProxyFactory };
