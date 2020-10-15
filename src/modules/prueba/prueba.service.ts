import { Injectable } from '@nestjs/common';
import { PruebaModel } from '../../database/models/prueba.model';

@Injectable()
export class PruebaService {
  // Retorna un objeto con todos los elementos encontrado en el modelo de la DB
  // se usa una async para que deba esperar a que la DB responda, y la promesa
  // para que retorne la instancia de la petición
  async findAll(): Promise<object> {
    return PruebaModel.findAll()
  }
}
