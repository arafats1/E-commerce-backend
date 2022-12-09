import { PartialType } from '@nestjs/swagger';
import { CreateBizInfoDto } from './create-biz-info.dto';

export class UpdateBizInfoDto extends PartialType(CreateBizInfoDto) {
}
