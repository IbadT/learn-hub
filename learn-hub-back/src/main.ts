import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Learn hub")
    .setDescription("Learn Hub Documentation")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  // app.enableCors({
  //   origin: ["http://localhost:3000", "http://localhost:3001"]
  // });
  
  app.setGlobalPrefix("api")
  app.enableCors(); // for everyone http

  await app.listen(3000);
}
bootstrap();

// npx nest g resourse admin