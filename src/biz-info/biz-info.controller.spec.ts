import { Test, TestingModule } from '@nestjs/testing';
import { BizInfoController } from './biz-info.controller';
import { BizInfoService } from './biz-info.service';

describe('BizInfoController', () => {
  let controller: BizInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BizInfoController],
      providers: [BizInfoService],
    }).compile();

    controller = module.get<BizInfoController>(BizInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
