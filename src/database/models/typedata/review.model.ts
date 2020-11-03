import admin from 'firebase-admin';
import Timestamp = admin.firestore.Timestamp;

export interface IReviewModel {
  _id: string
  comment: string
  rating: number
  date: Timestamp
  user: {
    _id: string
    name: string
    image: string
  }
}
