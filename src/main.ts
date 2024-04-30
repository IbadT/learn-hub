import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  const swaggerConfig = new DocumentBuilder()
    .setTitle("Learn hub")
    .setDescription("Learn Hub Documentation")
    .addServer(`http://${config.get("HTTP_HOST")}:${config.get("HTTP_PORT")}${config.get("HTTP_PREFIX")}`)
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(`${config.get("HTTP_PREFIX")}-docs`, app, document);

  app.enableCors({
    origin: ["http://localhost:3000", "http://localhost:3001"]
  });
  
  app.setGlobalPrefix('api')

  await app.listen(config.get("HTTP_PORT"));
}
bootstrap();
