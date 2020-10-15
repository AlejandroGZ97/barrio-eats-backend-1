import { NestFactory } from '@nestjs/core';
import { AppModule } from './application/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

const PORT = process.env.PORT || 3000

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  await app.listen(PORT);
}

bootstrap().then(() => {
  console.log(`---\n\x1b[32m>> Running in port: \x1b[33m${PORT}\x1b[0m`)
});
