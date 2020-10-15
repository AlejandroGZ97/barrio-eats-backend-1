import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class PruebaMiddleware implements NestMiddleware {
  // Para evaluar los permisos o formatos de peticiones
  use(req: Request, res: Response, next: NextFunction): any {
    console.log("Esto se ejecuta antes del EndPoint")

    next() // Continua con la ejecución en el EndPoint
    return "No tenias acceso a nuestra API" // No llegara aquí por el nest()
  }
}
