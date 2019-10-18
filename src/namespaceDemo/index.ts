/*
  namespace 内部模块，主要是用于组织代码，避免命名冲突 
*/
export namespace A {
  export class Animal {
    private name: string;
    constructor(name: string) {
      this.name = name
    }
    static nikeName: string = '小动物'
    getName(): string {
      return this.name
    }
    setName(name: string): void {
      this.name = name
    }
    sayHi(): string {
      return `my name is ${this.name}`
    }
    static eat() {
      return `${this.nikeName}在吃东西`
    }
  }

  class Dog extends Animal {
    constructor(name: string) {
      super(name)
    }
    sayHi() {
      return `我是Dog类，我的名字是${this.getName()}`
    }
  }

}