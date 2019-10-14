// 接口用来对类的行为和形状进行定义
interface PersonA {
  name: string;
  age: number;
  favoriteFood?: string[];
}

const tom: PersonA = {
  name: 'tom',
  age: 16,
}
console.log(tom)

const pp: Partial<PersonA> = {
  name: '小李子'
}
console.log(pp)


// 使用接口来定义函数的形状
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function (source, subString) {
  return source.search(subString) !== -1;
}

console.log(mySearch('mySearch', 'my'))


// 使用接口来表示数组 (一般用于类数组)
interface NumberArray {
  [index: number]: number;
}

let fibonacci: NumberArray = [1, 1, 2, 3, 5]


// 接口继承接口，类实现接口
interface Cap {
  showColor(): string
}

interface BoliCap extends Cap {
  showName(): string
}

class MyCap implements BoliCap {
  name: string;
  color: string;
  constructor(name: string, color: string) {
    this.name = name;
    this.color = color
  }
  showColor(){
    return  `杯子的颜色:${this.color}`
  }
  showName(){
    return `杯子的名字: ${this.name}`
  }
}

const cap = new MyCap('扣扣','青色')
console.log(cap.showColor())
console.log(cap.showName())
