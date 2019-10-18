/*
 这里需要说明的是：
 在TS中如果不出现export，或者 import 那么则认为它处于全局命名空间内
 如果出现了那么将自动创建命名空间。
 */
import { User, UserModel } from './model/User'
// 创建一个User 实例对象
const u = new User()
u.userName = 'gdz'
u.password = '123qwe'

// 增加数据
UserModel.add(u)

// 获取User表数据
const userData = UserModel.get(1)
console.log(userData)


