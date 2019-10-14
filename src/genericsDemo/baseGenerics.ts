
// 泛型方法、方法名后面加上<T>即可
function createArray<T>(length: number, value: T): Array<T> {
  let result: Array<T> = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

const stringResult = createArray<string>(3, 'x')
console.log(stringResult)
const numberResult = createArray(4, 1)
console.log(numberResult)


// 泛型类
class MinClass<T> {
  public list: T[] = []
  add(value: T) {
    this.list.push(value)
  }
  min(): T {
    let minValue = this.list[0]
    for (let i = 0; i < this.list.length; i++) {
      if (minValue > this.list[i]) {
        minValue = this.list[i]
      }
    }
    return minValue
  }
}

const minClass = new MinClass<number>()
minClass.add(10)
minClass.add(113)
minClass.add(1)
const minValue = minClass.min()
console.log(minValue)

const stringMinClass = new MinClass<string>()
stringMinClass.add('c')
stringMinClass.add('z')
stringMinClass.add('a')
const stringMinValue = stringMinClass.min()
console.log(stringMinValue)



// 泛型接口
interface AddConfig<T> {
  (value1: T, vallue2: T): T[];
}

let sum1: AddConfig<any> = <T>(v1: T, v2: T) => {
  return [v1, v2]
}

console.log(sum1('你好', 'typescript'))
console.log(sum1(1,3))


// 也可以把类当做参数常见于数据库操作
