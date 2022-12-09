import { PartialType } from '@nestjs/swagger';
import { CreatePropertyDto } from './create-property.dto';

export class UpdatePropertyDto extends PartialType(CreatePropertyDto) {
    location: string;
    size: string;
    type : string;
    listings: {
        listing: {
            item: {
                name: string;
                images: {
                    url: string;
                    resolution: string;
                    type : string;
                }
            };
            itemprice: string;
            description: string;
            quantity: number;
        };
    }
}
