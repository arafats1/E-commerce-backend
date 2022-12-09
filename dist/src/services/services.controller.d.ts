import { ServicesService } from './services.service';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Service & {
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
    findOne(id: string): Promise<import(".prisma/client").Service & {
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
    update(id: string, updateServiceDto: UpdateServiceDto): import(".prisma/client").Prisma.Prisma__ServiceClient<import(".prisma/client").Service, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ServiceClient<import(".prisma/client").Service, never>;
    replace(id: string, updateServiceDto: UpdateServiceDto): import(".prisma/client").Prisma.Prisma__ServiceClient<import(".prisma/client").Service, never>;
}
