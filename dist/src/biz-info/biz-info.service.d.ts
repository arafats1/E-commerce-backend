import { CreateBizInfoDto } from './dto/create-biz-info.dto';
import { UpdateBizInfoDto } from './dto/update-biz-info.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateListingDto } from 'src/listings/dto/create-listing.dto';
export declare class BizInfoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createBizInfoDto: CreateBizInfoDto): import(".prisma/client").Prisma.Prisma__BizInfoClient<import(".prisma/client").BizInfo, never>;
    createListing(id: number, createListingDto: CreateListingDto): import(".prisma/client").Prisma.Prisma__ListingClient<import(".prisma/client").Listing, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").BizInfo & {
        images: {
            url: string;
            resolution: string;
            type: string;
        }[];
        physicalAddress: {
            country: string;
            city: string;
            postalCode: string;
        }[];
        listings: {
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
                        }[];
                    }[];
                    location: string;
                }[];
            }[];
            description: string;
        }[];
        paymentDetails: {
            bankAccounts: {
                accountName: string;
                accountNumber: string;
                swiftCode: string;
                bankName: string;
            }[];
            mobileMoneyAccounts: {
                number: string;
                name: string;
            }[];
            cryptoCurrencyAccounts: {
                walletAddress: string;
                accountId: string;
            }[];
        }[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__BizInfoClient<import(".prisma/client").BizInfo & {
        images: {
            url: string;
            resolution: string;
            type: string;
        }[];
        physicalAddress: {
            country: string;
            city: string;
            postalCode: string;
        }[];
        listings: {
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
                        }[];
                    }[];
                    location: string;
                }[];
            }[];
            description: string;
        }[];
        paymentDetails: {
            bankAccounts: {
                accountName: string;
                accountNumber: string;
                swiftCode: string;
                bankName: string;
            }[];
            mobileMoneyAccounts: {
                number: string;
                name: string;
            }[];
            cryptoCurrencyAccounts: {
                walletAddress: string;
                accountId: string;
            }[];
        }[];
    }, never>;
    update(id: number, updateBizInfoDto: UpdateBizInfoDto): import(".prisma/client").Prisma.Prisma__BizInfoClient<import(".prisma/client").BizInfo, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__BizInfoClient<import(".prisma/client").BizInfo, never>;
}
