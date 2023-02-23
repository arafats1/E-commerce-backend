import { PropertiesService } from './properties.service';
import { UpdatePropertyDto } from './dto/update-property.dto';
export declare class PropertiesController {
    private readonly propertiesService;
    constructor(propertiesService: PropertiesService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Property & {
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
        };
    })[]>;
    findOne(id: string): Promise<import(".prisma/client").Property & {
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
        };
    }>;
    update(id: string, updatePropertyDto: UpdatePropertyDto): import(".prisma/client").Prisma.Prisma__PropertyClient<import(".prisma/client").Property, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PropertyClient<import(".prisma/client").Property, never>;
    replace(id: string, updatePropertyDto: UpdatePropertyDto): import(".prisma/client").Prisma.Prisma__PropertyClient<import(".prisma/client").Property, never>;
}
