import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CategoriesModule } from './categories/categories.module';
import { ItemsModule } from './items/items.module';
import { UsersModule } from './users/users.module';
import { SignUpsModule } from './sign-ups/sign-ups.module';
import { BizInfoModule } from './biz-info/biz-info.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { SellersModule } from './sellers/sellers.module';
import { BrandsModule } from './brands/brands.module';
import { ServicesModule } from './services/services.module';
import { PropertiesModule } from './properties/properties.module';
import { CarouselsModule } from './carousels/carousels.module';
import { APP_PIPE } from '@nestjs/core';
import { ListingsModule } from './listings/listings.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';



@Module({
  imports: [PrismaModule, CategoriesModule, ItemsModule, UsersModule, SignUpsModule, BizInfoModule, AuthModule, ProductsModule, SellersModule, BrandsModule, ServicesModule, PropertiesModule, CarouselsModule, ListingsModule, CloudinaryModule, ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_PIPE,
    useClass: ValidationPipe,
  }],
})
export class AppModule {}
