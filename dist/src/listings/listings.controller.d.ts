import { ListingsService } from './listings.service';
import { UpdateListingDto } from './dto/update-listing.dto';
export declare class ListingsController {
    private readonly listingsService;
    constructor(listingsService: ListingsService);
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Listing & {
        productListing: {
            color: string;
            size: string;
            quantity: number;
            price: number;
            currencies: {
                currencyName: string;
            }[];
            products: {
                items: {
                    name: string;
                    brand: import(".prisma/client").Brand;
                    category: import(".prisma/client").Category;
                    images: {
                        url: string;
                        type: string;
                    }[];
                }[];
            }[];
        }[];
        serviceListing: {
            price: number;
            currencies: {
                currencyName: string;
            }[];
            services: {
                items: {
                    name: string;
                    brand: import(".prisma/client").Brand;
                    category: import(".prisma/client").Category;
                    images: {
                        url: string;
                        type: string;
                    }[];
                }[];
            }[];
        }[];
        propertyListing: {
            size: string;
            price: number;
            currencies: {
                currencyName: string;
            }[];
            properties: {
                type: string;
                items: {
                    name: string;
                    brand: import(".prisma/client").Brand;
                    category: import(".prisma/client").Category;
                    images: {
                        url: string;
                        type: string;
                    }[];
                }[];
                location: string;
            }[];
        }[];
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ListingClient<import(".prisma/client").Listing & {
        productListing: {
            color: string;
            size: string;
            quantity: number;
            price: number;
            currencies: {
                currencyName: string;
            }[];
            products: {
                items: {
                    name: string;
                    brand: import(".prisma/client").Brand;
                    category: import(".prisma/client").Category;
                    images: {
                        url: string;
                        type: string;
                    }[];
                }[];
            }[];
        }[];
        serviceListing: {
            price: number;
            currencies: {
                currencyName: string;
            }[];
            services: {
                items: {
                    name: string;
                    brand: import(".prisma/client").Brand;
                    category: import(".prisma/client").Category;
                    images: {
                        url: string;
                        type: string;
                    }[];
                }[];
            }[];
        }[];
        propertyListing: {
            size: string;
            price: number;
            currencies: {
                currencyName: string;
            }[];
            properties: {
                type: string;
                items: {
                    name: string;
                    brand: import(".prisma/client").Brand;
                    category: import(".prisma/client").Category;
                    images: {
                        url: string;
                        type: string;
                    }[];
                }[];
                location: string;
            }[];
        }[];
    }, never>;
    update(id: string, updateListingDto: UpdateListingDto): import(".prisma/client").Prisma.Prisma__ListingClient<import(".prisma/client").Listing, never>;
    replace(id: string, updateListingDto: UpdateListingDto): import(".prisma/client").Prisma.Prisma__ListingClient<import(".prisma/client").Listing, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ListingClient<import(".prisma/client").Listing & {
        productListing: import(".prisma/client").ProductListing[];
    }, never>;
}
