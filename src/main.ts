import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import {PORT}from "./config/config.services"
const port = PORT ?? 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { rawBody: true });
  app.use(
    helmet({
      crossOriginResourcePolicy: false,
    }),
  );

  app.enableCors({
    origin: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  await app.listen(port, () => {
    console.log(`Server Work At Port ${port}`);
  });
}
bootstrap();
