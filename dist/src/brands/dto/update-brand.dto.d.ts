import { CreateBrandDto } from './create-brand.dto';
declare const UpdateBrandDto_base: import("@nestjs/common").Type<Partial<CreateBrandDto>>;
export declare class UpdateBrandDto extends UpdateBrandDto_base {
    name: string;
    image: {
        id: any;
        url: string;
        resolution: string;
        type: string;
    };
}
export {};
