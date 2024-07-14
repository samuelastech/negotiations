export function LogExecutionTime() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
      console.time(propertyKey);
      const value = Reflect.apply(fn, this, args);
      console.timeEnd(propertyKey);
      value;
    }

    return descriptor;
  }
}