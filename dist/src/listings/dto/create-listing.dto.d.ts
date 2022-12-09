export declare class CreateListingDto {
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
    bizInfo: {
        connect: {
            id: number;
        };
    };
}
