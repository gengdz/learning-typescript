
// 1. boolean 布尔类型 
let flag: boolean = false
flag = true
console.log(flag)

// 2. number 数字类型
let num: number = 1
console.log(num)

// 3. string 字符串类型
let str: string = 'test'
console.log(str)

// 4. void 空值,一般用于方法的返回值
const showName = (name: string): void => {
  return console.log(name)
}
showName("耿德洲")

// 5. null 空对象
const n: null = null
console.log(null)

// 6. undefined 未定义 
// 需要说明的是：null和 undefined是所有类型的子类型
const u: undefined = undefined
console.log(u)


// 7. 联合类型
let myNameOrAge: string|number
myNameOrAge = 10
myNameOrAge = 'gdz'

// 8. array 数组类型
// 数组的定义有两种方式
const list1: number[] = [1, 2, 3]
// 第二种使用泛型的方式定义
const list2: Array<number> = [4, 5, 6]

// 9. tuple 元组类型 定义的类型和后面的值一定要对应起来
let tuple1: [number, string] = [ 1, 'a']

// 10. enum 枚举类型  这个非常重要。
enum StatusCode { success = 1, err = 2 }
const isSuccess: StatusCode = StatusCode.success
console.log(isSuccess)

// 11. any 任意类型，这个不用举例子，毕竟是 anyscript


