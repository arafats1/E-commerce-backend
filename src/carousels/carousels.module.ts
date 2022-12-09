import { Module } from '@nestjs/common';
import { CarouselsService } from './carousels.service';
import { CarouselsController } from './carousels.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CarouselsController],
  providers: [CarouselsService],
  imports: [PrismaModule],
})
export class CarouselsModule {}
