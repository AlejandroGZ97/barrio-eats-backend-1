import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PruebaService } from './prueba.service';
import { PruebaController } from './prueba.controller';
import { PruebaMiddleware } from '../../middleware/prueba.middleware';

@Module({
  providers: [PruebaService],
  controllers: [PruebaController]
})
export class PruebaModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    // Se aplica a todas las rutas
    consumer.apply(PruebaMiddleware).forRoutes(PruebaController)

    // Se aplica solo a las rutas indicadas
    // consumer.apply(PruebaMiddleware).forRoutes("/prueba/all")
  }
}
