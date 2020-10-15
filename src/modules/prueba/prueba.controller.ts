import { Controller, Get } from '@nestjs/common';
import { IPrueba, PruebaDto, PruebaModel } from '../../database/models/prueba.model';
import { PruebaService } from './prueba.service';

@Controller('prueba')
export class PruebaController {
  constructor(
    private readonly pruebaService: PruebaService
  ){}

  @Get("/all")
  // Podemos poner la logica de manera inmediata en el metodo, como crearPrueba()
  // pero se optara por separar y colocar la logica en los archivos *.service.ts
  // para manejar aqui los errores y formatos invalidos, asi como los permisos
  async findAll(): Promise<object> {
    return this.pruebaService.findAll()
  }

  @Get()
  // El tipo de retorno no es necesario, pero idealmente para pasar los test SI
  async crearPrueba() {
    // Buscamos todos los elementos en la base de datos
    let _counter = await PruebaModel.findAll()

    // Creamos un nuevo objeto con la interfaz de la DB/Modelo
    let _temp: IPrueba = {
      description: "Tarea x",
      title: "Nueva tarea " + _counter.length
    }

    // Convertimos el objeto en Clase para tener acceso a sus métodos
    let _prueba = new PruebaDto(_temp)
    // Retornamos el objeto creado en la DB como Modelo
    return await PruebaModel.create(_prueba)
  }

}
