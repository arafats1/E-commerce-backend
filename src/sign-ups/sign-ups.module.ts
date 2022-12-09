import { Module } from '@nestjs/common';
import { SignUpsService } from './sign-ups.service';
import { SignUpsController } from './sign-ups.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SignUpsController],
  providers: [SignUpsService],
  imports: [PrismaModule],
  exports: [SignUpsService],
})
export class SignUpsModule {}
