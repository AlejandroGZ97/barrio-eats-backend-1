import { Module } from '@nestjs/common';
import { RootDefaultController } from './root_default.controller';

@Module({
  controllers: [RootDefaultController]
})
export class RootDefaultModule {}
