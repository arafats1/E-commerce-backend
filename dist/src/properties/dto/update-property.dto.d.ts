import { CreatePropertyDto } from './create-property.dto';
declare const UpdatePropertyDto_base: import("@nestjs/common").Type<Partial<CreatePropertyDto>>;
export declare class UpdatePropertyDto extends UpdatePropertyDto_base {
    location: string;
    size: string;
    type: string;
    listings: {
        listing: {
            item: {
                name: string;
                images: {
                    url: string;
                    resolution: string;
                    type: string;
                };
            };
            itemprice: string;
            description: string;
            quantity: number;
        };
    };
}
export {};
