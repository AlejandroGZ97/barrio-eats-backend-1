import admin from 'firebase-admin';
import Timestamp = admin.firestore.Timestamp;
import { ModelFireStore } from '../model.firestore';
import { FirebaseFirestore } from '../firebase.service';
import { IReviewModel } from './typedata/review.model';
import { IngredientWH } from './warehouse.model';


export interface IDishModel {
  _id: string
  name: string
  price: number
  available: boolean
  ingredients: Array<IngredientWH>
  description: string
  offer: {
    status: boolean
    price: number
    expiration: Timestamp
  }
  favorite: boolean
  reviews: Array<IReviewModel>
}


export class DishDto extends ModelFireStore implements IDishModel {
  _id: string = null
  available: boolean = null
  description: string = null
  favorite: boolean = null
  ingredients: Array<IngredientWH> = null
  name: string = null
  offer: { status: boolean; price: number; expiration: FirebaseFirestore.Timestamp } = null
  price: number = null
  reviews: Array<IReviewModel> = null

  constructor(dish: IDishModel) {
    super();
    for(let k in dish) this[k] = dish[k]
  }
}


export class DishModel {
  private static Collection = FirebaseFirestore.collection("dish")
}
