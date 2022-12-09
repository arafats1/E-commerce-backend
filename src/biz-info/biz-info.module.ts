import { Module } from '@nestjs/common';
import { BizInfoService } from './biz-info.service';
import { BizInfoController } from './biz-info.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [BizInfoController],
  providers: [BizInfoService],
  imports: [PrismaModule],
})
export class BizInfoModule {}
