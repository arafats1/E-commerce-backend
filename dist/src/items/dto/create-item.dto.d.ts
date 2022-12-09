interface Image {
    url: string;
    resolution: string;
    type: string;
}
export declare class CreateItemDto {
    name: string;
    popular: boolean;
    dailyDeals: boolean;
    category: {
        connect: {
            name: string;
        };
    };
    brand: {
        connect: {
            name: string;
        };
    };
    images: Image[];
    product: {
        productListing: {
            color: string;
            size: string;
            quantity: number;
            price: number;
            currencies: {
                currencyName: string;
            };
        };
    };
    service: {
        type: string;
        serviceListing: {
            price: number;
            currencies: {
                currencyName: string;
            };
        };
    };
    property: {
        type: string;
        location: string;
        propertyListing: {
            size: string;
            price: number;
            currencies: {
                currencyName: string;
            };
        };
    };
}
export {};
