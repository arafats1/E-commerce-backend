import { PartialType } from '@nestjs/swagger';
import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  name: string;
   image: {
      id: any;
      url: string;
      resolution: string;
      type: string;
   };
}
