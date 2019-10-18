import { Mongodb } from '../resporitory/db'
class User {
  userName: string | undefined
  password: string | undefined
}

const UserModel = new Mongodb<User>()

export { User, UserModel}

