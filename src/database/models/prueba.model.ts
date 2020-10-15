import { ModelFireStore } from '../model.firestore';
import { FirebaseFirestore } from '../firebase.service';
import admin from 'firebase-admin';
import Timestamp = admin.firestore.Timestamp;

// Siempre hay que agregar la I para indicar que es interface: INombreModelo|Interface
// Definimos los campos que deben formar a nuestro modelo (atributos de "tabla")
export interface IPrueba {
  title: string
  description: string
}

// Lo usaremos para dar formato y validar dentro del código (no en DB)
// Si la retornamos desde la DB, se agregaran campos
export class PruebaDto extends ModelFireStore implements IPrueba {
  // Valor por defecto null, para fines de comprobación
  // Se deben agregar manualmente
  description: string = null
  title: string = null

  constructor(prueba: IPrueba) {
    super();
    // Asignamos todos los valores del objeto recibido con las de la clase (this)
    for(let k in prueba) this[k] = prueba[k]
  }
}

// Modelo con métodos para la DB
// Solo métodos static para que no sea necesario una instancia de la clase
export class PruebaModel {
  private static Collection = FirebaseFirestore.collection("prueba")

  static async create(prueba: PruebaDto) {
    let snapshot = await this.Collection.add({
      ...prueba.json,
      _createAt: Timestamp.now(),
      _updateAt: Timestamp.now()
    })

    return (await snapshot.get()).data()
  }

  static async findAll() {
    let list = []
    await this.Collection.get().then(snapshot => {
      snapshot.docs.map(value => list.push(value.data()))
    })

    return list
  }
}
