import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PropertiesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPropertyDto: CreatePropertyDto): void;
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
    findOne(id: number): Promise<import(".prisma/client").Property & {
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
    update(id: number, updatePropertyDto: UpdatePropertyDto): import(".prisma/client").Prisma.Prisma__PropertyClient<import(".prisma/client").Property, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__PropertyClient<import(".prisma/client").Property, never>;
    replace(id: number, updatePropertyDto: UpdatePropertyDto): import(".prisma/client").Prisma.Prisma__PropertyClient<import(".prisma/client").Property, never>;
}
