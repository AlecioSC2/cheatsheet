
class Class {
  // The body of a class is executed in strict mode
  field = 5;
  #privateField = 6;
  static staticField = 7;

  constructor() {
    console.log('Calling Class Constructor');
    console.log('Private Field = ', this.#privateField);
    this.instanceProperty = 1;
  }

  get getterProperty() {
    console.log('Calling Getter Property');
    return 2;
  }

  method() {
    console.log('Calling Method');
    return 3;
  }

  static staticMethod() {
    console.log('Calling Static Method');
    return 4;
  }
}

class Subclass extends Class {
  constructor() {
    console.log('Calling Subclass Constructor');
    super();
  }

  method() {
    console.log('Calling Subclass Method');
    super.method();
    return 33;
  }
}

const mixin = Base => class extends Base {

  constructor(props) {
    super(props);
    console.log('Calling Mixin Constructor');
  }

  mixinMethod() {
    console.log('Calling Mixin Method');
    return 8;
  }
}

class ClassThatUsesMixins extends mixin(Class) {

  constructor(props) {
    super(props);
    console.log('Calling Class That Uses Mixins Constructor');
  }

  newMethod() {
    console.log('Calling New Method');
    return 9;
  }
}

const classInstance = new Class();
console.log('Instance Property =', classInstance.instanceProperty);
console.log('Getter Property =', classInstance.getterProperty);
console.log('Method =', classInstance.method());
console.log('Static Method =', Class.staticMethod());
console.log('Field =', classInstance.field);
console.log('Static Field =', Class.staticField);
console.log('-----');

const subclassInstance = new Subclass();
console.log('Subclass Method =', subclassInstance.method());
console.log('-----');

const classThatUsesMixinsInstance = new ClassThatUsesMixins();
console.log('Class Method =', classThatUsesMixinsInstance.method());
console.log('Mixin Method =', classThatUsesMixinsInstance.mixinMethod());
console.log('New Method =', classThatUsesMixinsInstance.newMethod());
