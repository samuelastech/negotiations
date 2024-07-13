export function ElementInject(selector: string) {
  return function (target: any, propertyKey: string) {
    const element = document.querySelector(selector);
    const getter = function () {
      return element;
    };

    Reflect.defineProperty(target, propertyKey, {
      get: getter,
    });
  }
}