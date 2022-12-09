import { ApiProperty } from "@nestjs/swagger";
interface Image {
    url: string;
    resolution: string;
    type: string;
}
export class CreateItemDto {
   @ApiProperty()
    name: string;
    @ApiProperty()
    popular: boolean;
    @ApiProperty()
    dailyDeals: boolean;
    @ApiProperty()
    category:{
        connect:{
            name: string;
        }
    }

    @ApiProperty()
    brand:{
        connect:{
            name: string;
        }
    }
    
    @ApiProperty({type: Array, isArray: true})
    images: Image[];

    @ApiProperty()
    product: {
            productListing: {
                color: string;
                size: string;
                quantity: number;
                price: number;
                currencies: {
                    currencyName: string;
                }
            }
            }

    @ApiProperty()
    service: {
            type : string;
            serviceListing: {
                price: number;
                currencies: {
                    currencyName: string;
                }
            }
        }
        
    @ApiProperty()
    property: {
            type: string;
            location: string;
            propertyListing: {
                size: string;
                price: number;
                currencies: {
                    currencyName: string;
                }
            }
        }

        }


