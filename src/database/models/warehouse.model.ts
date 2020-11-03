import { ModelFireStore } from '../model.firestore';
import { FirebaseFirestore } from '../firebase.service';


export enum IndicatorWareHouse {
  KG = "Kilogramo",
  GR = "Gramo"
}


export interface IngredientWH {
  size: number
  indicator: IndicatorWareHouse
}


export interface IWarehouseModel {
  _id: string
  name: string
  amount: IngredientWH
}


export class WarehouseDto extends ModelFireStore implements IWarehouseModel {
  _id: string = null
  amount: { size: number; indicator: IndicatorWareHouse } = null
  name: string = null

  constructor(item: IWarehouseModel) {
    super();
    for(let k in item) this[k] = item[k]
  }
}


export class WarehouseModel {
  private static Collection = FirebaseFirestore.collection("warehouse")
}
