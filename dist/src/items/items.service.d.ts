import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ItemsService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findPopularItem(id: number): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item & {
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
    findDailyDealsItem(id: number): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item & {
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
    update(id: number, updateItemDto: UpdateItemDto): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item & {
        images: {
            url: string;
            resolution: string;
            type: string;
        }[];
    }, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item & {
        images: {
            url: string;
            resolution: string;
            type: string;
        }[];
    }, never>;
    replace(id: number, updateItemDto: UpdateItemDto): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item & {
        images: {
            url: string;
            resolution: string;
            type: string;
        }[];
    }, never>;
}
