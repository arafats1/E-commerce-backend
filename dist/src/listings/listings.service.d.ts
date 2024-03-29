import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ListingsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createListingDto: CreateListingDto): void;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Listing & {
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ListingClient<import(".prisma/client").Listing & {
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
    update(id: number, updateListingDto: UpdateListingDto): import(".prisma/client").Prisma.Prisma__ListingClient<import(".prisma/client").Listing, never>;
    replace(id: number, updateListingDto: UpdateListingDto): import(".prisma/client").Prisma.Prisma__ListingClient<import(".prisma/client").Listing, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ListingClient<import(".prisma/client").Listing & {
        productListing: import(".prisma/client").ProductListing[];
    }, never>;
}
