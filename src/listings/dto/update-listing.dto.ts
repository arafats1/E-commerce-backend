import { PartialType } from '@nestjs/swagger';
import { CreateListingDto } from './create-listing.dto';

export class UpdateListingDto extends PartialType(CreateListingDto) {
    description: string;
    productListing: {
        color: string;
        size: string;
        quantity: number;
        price: number;
        currencies: {
            currencyName: string;
        }
        products: {
            items: {
                name: string;
                category: string;
                brand: string;
                images: [{
                    resolution: any;
                    type: any;
                    url: string;
                }]
            }
        }
    }
    seller: {
        connect: {
            id: number;
        }
    }
}
