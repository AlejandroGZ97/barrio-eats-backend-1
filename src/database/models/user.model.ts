import { ModelFireStore } from '../model.firestore';
import { FirebaseFirestore } from '../firebase.service';

export enum CREDENTIALS {
  ACTION_1 = (1<<0), //0000 0000 0001 -> Escritura en inventario
  ACTION_2 = (1<<1), //0000 0000 0010 -> Lectura en inventario
  ACTION_3 = (1<<2), //0000 0000 0100 -> Escritura de usuarios
  ACTION_4 = (1<<3)  //0000 0000 1000 -> Lectura de usuarios
}


export interface IUserModel {
  _id: string
  name: string
  username: string
  password: string
  phone: string
  email: string
  credential: string
  is_active: boolean
  image: string
}


export class UserDto extends ModelFireStore implements IUserModel {
  _id: string = null
  name: string = null
  username: string = null
  password: string = null
  phone: string = null
  email: string = null
  credential: string = null
  is_active: boolean = null
  image: string = null

  constructor(user: IUserModel) {
    super();
    for(let k in user) this[k] = user[k]
  }
}


export class UserModel {
  private static Collection = FirebaseFirestore.collection("user")
}
