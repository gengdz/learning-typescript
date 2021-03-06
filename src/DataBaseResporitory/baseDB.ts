
interface IDB<T> {
  add(info: T): T;
  update(info: T, id: number): T;
  delete(id: number): boolean;
  get(id: number): boolean;
}

// 实现泛型接口，那么类也应该是一个泛型类
class Mongodb<T> implements IDB<T> {
  constructor(){
    console.log('建立连接')
  }
  add(info: T): T {
    console.log(info)
    return info
  }
  update(info: T, id: number): T {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): boolean {
    throw new Error("Method not implemented.");
  }
}

class User {
  userName: string | undefined
  password: string | undefined
}

const user = new User()
user.userName = '张三'
user.password = '1223'
const mongodb = new Mongodb<User>()
mongodb.add(user)