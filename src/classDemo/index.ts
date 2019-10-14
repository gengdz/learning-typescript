// ts中的类
class Animal {
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

let a1 = new Animal('张三')
console.log(a1.getName())
a1.setName('张三的小名')
console.log(a1.sayHi())
console.log(Animal.nikeName)
console.log(Animal.eat())


// 类的继承，通过 extends、constructor、super 实现
class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }
  sayHi() {
    return `我是Dog类，我的名字是${this.getName()}`
  }
}

let dog = new Dog('狗子')
dog.setName('小狗子')
console.log(dog.sayHi())
console.log(Dog.nikeName)
console.log(Dog.eat())


// 多态。
class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }
  sayHi() {
    return `我是Cat类，我的名字是${this.getName()}`
  }
}

let cat = new Cat('猫咪')
console.log(cat.sayHi())

// 抽象方法和抽象类
abstract class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
  abstract eat(): string
}

class Student extends Person {
  eat() {
    return `${this.name}同学在食堂吃饭`
  }
}

const student = new Student('耿德洲')
console.log(student.eat())