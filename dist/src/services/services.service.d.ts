import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ServicesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createServiceDto: CreateServiceDto): void;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Service & {
        serviceListing: {
            price: number;
            currencies: {
                currencyName: string;
            }[];
            services: {
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
            }[];
        };
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").Service & {
        serviceListing: {
            price: number;
            currencies: {
                currencyName: string;
            }[];
            services: {
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
            }[];
        };
    }>;
    update(id: number, updateServiceDto: UpdateServiceDto): import(".prisma/client").Prisma.Prisma__ServiceClient<import(".prisma/client").Service, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ServiceClient<import(".prisma/client").Service, never>;
    replace(id: number, updateServiceDto: UpdateServiceDto): import(".prisma/client").Prisma.Prisma__ServiceClient<import(".prisma/client").Service, never>;
}
