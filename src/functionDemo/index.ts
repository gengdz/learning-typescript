
/* 
  定义函数有两种方式：
  1、函数声明
  2、函数表达式
*/

// 函数声明（Function Declaration）
function sum(x: number, y: number) {
  return x + y;
}

// 函数表达式（Function Expression）
let mySum = function (x: number, y: number) {
  return x + y;
}


// 使用匿名函数的方式声明一个函数
const showAge = (name: number): void => {
  return console.log(name)
}
showAge(24)

// 显示用户信息
const userInfo = (name: string, age: number): string => {
  return `姓名：${name}, 年龄：${age}`
}
// 这里gdz不用指定类型的原因是 ts类型推导机制
const gdz = userInfo('耿德洲', 24)
console.log(gdz)

// 可选参数的用法
// 说明：可选参数必须在必选参数的后面，并且可选参数后面不能再次出现必选参数
const myFavoriteFood = (name: string, type?: string) => {
  return `我喜欢吃${name},${type ? `它是${type}` : `但是我不知道它是那个菜系的`}`
}
const apple = myFavoriteFood('苹果', '中餐')
const pig = myFavoriteFood('猪肉')
console.log(apple)
console.log(pig)


// 默认参数的用法, 默认参数代表它也是一个可选参数
const myBook = (name: string, language: string = '中文') => {
  return `我喜欢的书的名字是${name}, 它是用${language}书写的`
}
const chineseBook = myBook('滕王阁序')
const javaEffective = myBook('javaEffective', '英文')
console.log(chineseBook)
console.log(javaEffective)

// 剩余参数的用法，
const push = (array: number[], ...item: number[]) => {
  return [...array, ...item]
}
let array1 = [1, 2]
const target = push(array1, 3, 4, 5)
console.log(target)


// 函数的重载
type nameOrAge = string | number
function getInfo(name: string): string
function getInfo(age: number): string
function getInfo(info: nameOrAge): nameOrAge {
  if (typeof info === 'string') {
    return `我的名字叫${info}`
  } else {
    return `我的年龄是${info}`
  }
}
const myName = getInfo('耿德洲')
const myAge = getInfo(24)
console.log(myName)
console.log(myAge)
