import { Test, TestingModule } from '@nestjs/testing';
import { BizInfoService } from './biz-info.service';

describe('BizInfoService', () => {
  let service: BizInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BizInfoService],
    }).compile();

    service = module.get<BizInfoService>(BizInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
