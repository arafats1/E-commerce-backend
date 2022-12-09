import { ApiProperty} from "@nestjs/swagger";
export class CreateListingDto {
    @ApiProperty()
    description: string;
    @ApiProperty()
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
                images: [
                    {
                    resolution: any;
                    type: any;
                    url: string;
                    }
                ]
                
            }
        }
    }
    bizInfo: {
        connect: {
            id: number;
        }
    }
}
