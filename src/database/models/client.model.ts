import { ModelFireStore } from '../model.firestore';
import { FirebaseFirestore } from '../firebase.service';
import { IShoppingModel } from './typedata/shopping.model';


export interface IClientModel {
  _id: string
  phone: string
  address: string
  shopping: Array<IShoppingModel>
}


export class ClientDto extends ModelFireStore implements IClientModel {
  _id: string = null
  address: string = null
  phone: string = null
  shopping: Array<IShoppingModel> = null

  constructor(client: IClientModel) {
    super();
    for(let k in client) this[k] = client[k]
  }
}


export class ClientModel {
  private static Collection = FirebaseFirestore.collection("user")
}
