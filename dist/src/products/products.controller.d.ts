import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Product & {
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
    findOne(id: string): Promise<import(".prisma/client").Product & {
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
    update(id: string, updateProductDto: UpdateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product, never>;
    remove(id: string): Promise<import(".prisma/client").Product>;
    replace(id: string, updateProductDto: UpdateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product, never>;
}
