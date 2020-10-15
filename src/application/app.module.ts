import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RootDefaultModule } from '../modules/root_default/root_default.module';
import { PruebaModule } from '../modules/prueba/prueba.module';

@Module({
  imports: [
    PruebaModule,
    RootDefaultModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
