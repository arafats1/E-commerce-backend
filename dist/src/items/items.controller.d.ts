import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    create(createItemDto: CreateItemDto): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item, never>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Item & {
        images: {
            url: string;
            resolution: string;
            type: string;
        }[];
        product: {
            productListing: {
                color: string;
                size: string;
                quantity: number;
                price: number;
                currencies: {
                    currencyName: string;
                }[];
            }[];
        }[];
        service: {
            serviceListing: {
                price: number;
                currencies: {
                    currencyName: string;
                }[];
            };
        }[];
        property: {
            propertyListing: {
                size: string;
                price: number;
                currencies: {
                    currencyName: string;
                }[];
            };
        }[];
    })[]>;
    update(id: string, updateItemDto: UpdateItemDto): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item & {
        images: {
            url: string;
            resolution: string;
            type: string;
        }[];
    }, never>;
    findPopular(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Item & {
        images: {
            url: string;
            resolution: string;
            type: string;
        }[];
        product: {
            productListing: {
                color: string;
                size: string;
                quantity: number;
                price: number;
                currencies: {
                    currencyName: string;
                }[];
            }[];
        }[];
        service: {
            serviceListing: {
                price: number;
                currencies: {
                    currencyName: string;
                }[];
            };
        }[];
        property: {
            propertyListing: {
                size: string;
                price: number;
                currencies: {
                    currencyName: string;
                }[];
            };
        }[];
    })[]>;
    findPopularInCategory(id: string): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item & {
        images: {
            url: string;
            resolution: string;
            type: string;
        }[];
        product: {
            productListing: {
                color: string;
                size: string;
                quantity: number;
                price: number;
                currencies: {
                    currencyName: string;
                }[];
            }[];
        }[];
        service: {
            serviceListing: {
                price: number;
                currencies: {
                    currencyName: string;
                }[];
            };
        }[];
        property: {
            propertyListing: {
                size: string;
                price: number;
                currencies: {
                    currencyName: string;
                }[];
            };
        }[];
    }, never>;
    findDailyDeals(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Item & {
        images: {
            url: string;
            resolution: string;
            type: string;
        }[];
        product: {
            productListing: {
                color: string;
                size: string;
                quantity: number;
                price: number;
                currencies: {
                    currencyName: string;
                }[];
            }[];
        }[];
        service: {
            serviceListing: {
                price: number;
                currencies: {
                    currencyName: string;
                }[];
            };
        }[];
        property: {
            propertyListing: {
                size: string;
                price: number;
                currencies: {
                    currencyName: string;
                }[];
            };
        }[];
    })[]>;
    findDailyDealsInCategory(id: string): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item & {
        images: {
            url: string;
            resolution: string;
            type: string;
        }[];
        product: {
            productListing: {
                color: string;
                size: string;
                quantity: number;
                price: number;
                currencies: {
                    currencyName: string;
                }[];
            }[];
        }[];
        service: {
            serviceListing: {
                price: number;
                currencies: {
                    currencyName: string;
                }[];
            };
        }[];
        property: {
            propertyListing: {
                size: string;
                price: number;
                currencies: {
                    currencyName: string;
                }[];
            };
        }[];
    }, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item & {
        images: {
            url: string;
            resolution: string;
            type: string;
        }[];
    }, never>;
    replace(id: string, updateItemDto: UpdateItemDto): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item & {
        images: {
            url: string;
            resolution: string;
            type: string;
        }[];
    }, never>;
}
