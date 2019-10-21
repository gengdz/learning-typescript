import * as R from 'ramda'

class Person {
  public name: string | undefined;

  @readonly
  public sayHi() {
    return `${this.name}`
  }
}

// Person.prototype.sayHi = function () {
//   return `aaaaa`
// }

function readonly(target: any, name: string, descriptor: any) {
  console.log('target',target)
  descriptor.writable = false;
  console.log('name', name)
  console.log('descriptor', descriptor)
  return descriptor;
}

const p = new Person()
p.name = 'gdz'
console.log(p.sayHi())


/* class Student extends Person {
  public age: number | undefined;
  constructor(age: number) {
    super()
    this.age = age;
  }
  public sayHi() {
    return `${this.name},${this.age}`
  }
} */
