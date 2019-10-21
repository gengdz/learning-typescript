import * as R from 'ramda'

class Person {
  @value('耿德洲')
  public name: string | undefined;

  public sayHi() {
    return `${this.name}`
  }
}

function value(params:string){
  return function (target: any, name:string){
    target[name] = params
  }
}

const p = new Person()
console.log(p.sayHi())
