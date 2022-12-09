import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      
    }),
  );
  app.enableCors();

  const config = new DocumentBuilder()
  .setTitle('Agalm  APIs')
  .setDescription('The APIs that Agalm provides for its users')
  .setVersion('1.0')
  .build();
  
  

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(process.env.PORT || 3000);
  
}
bootstrap();
