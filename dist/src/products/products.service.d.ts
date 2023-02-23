import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: CreateProductDto): void;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Product & {
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
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").Product & {
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
    }>;
    update(id: number, updateProductDto: UpdateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product, never>;
    remove(id: number): Promise<import(".prisma/client").Product>;
    replace(id: number, updateProductDto: UpdateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product, never>;
}
