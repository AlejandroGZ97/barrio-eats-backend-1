import { All, Controller, HttpCode, HttpStatus } from '@nestjs/common';

@Controller("/*")
export class RootDefaultController {

  @All("/")
  @HttpCode(HttpStatus.NOT_FOUND)
  getAll(): object {
    return {status: 404, error: "Ruta no existente"}
  }
}
