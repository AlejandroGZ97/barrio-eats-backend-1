import admin from 'firebase-admin';
import Timestamp = admin.firestore.Timestamp;

export interface IShoppingModel {
  _id: string
  name: string
  price: number
  date: Timestamp
  count: number
  delivery: boolean
  confirmation: boolean
}
