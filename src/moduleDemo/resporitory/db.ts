
interface IDB<T> {
  add(info: T): T;
  update(info: T, id: number): T;
  delete(id: number): boolean;
  get(id: number): any [];
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
  get(id: number): any[] {
    const list = [
      { name: 'gdz', password: '123qwe' }
    ]
    return list
  }
}

export { Mongodb }