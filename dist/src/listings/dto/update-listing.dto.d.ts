import { CreateListingDto } from './create-listing.dto';
declare const UpdateListingDto_base: import("@nestjs/common").Type<Partial<CreateListingDto>>;
export declare class UpdateListingDto extends UpdateListingDto_base {
    description: string;
    productListing: {
        color: string;
        size: string;
        quantity: number;
        price: number;
        currencies: {
            currencyName: string;
        };
        products: {
            items: {
                name: string;
                category: string;
                brand: string;
                images: [
                    {
                        resolution: any;
                        type: any;
                        url: string;
                    }
                ];
            };
        };
    };
    seller: {
        connect: {
            id: number;
        };
    };
}
export {};
