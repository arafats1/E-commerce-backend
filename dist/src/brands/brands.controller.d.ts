/// <reference types="multer" />
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { CreateItemDto } from 'src/items/dto/create-item.dto';
export declare class BrandsController {
    private readonly brandsService;
    constructor(brandsService: BrandsService);
    uploadImage(file: Express.Multer.File): Promise<import(".prisma/client").Image>;
    create(createBrandDto: CreateBrandDto): import(".prisma/client").Prisma.Prisma__BrandClient<import(".prisma/client").Brand, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Brand & {
        images: {
            url: string;
            resolution: string;
            type: string;
        }[];
    })[]>;
    createItem(name: string, createItemDto: CreateItemDto): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item, never>;
    findOne(name: string): Promise<import(".prisma/client").Brand & {
        images: {
            url: string;
            resolution: string;
            type: string;
        }[];
    }>;
    update(id: string, updateBrandDto: UpdateBrandDto): import(".prisma/client").Prisma.Prisma__BrandClient<import(".prisma/client").Brand, never>;
    findItems(name: string): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Brand & {
        items: {
            name: string;
            product: {
                productListing: {
                    color: string;
                    size: string;
                    price: number;
                }[];
            }[];
        }[];
    })[]>;
    remove(name: string): Promise<import(".prisma/client").Brand>;
    replace(id: string, updateBrandDto: UpdateBrandDto): import(".prisma/client").Prisma.Prisma__BrandClient<import(".prisma/client").Brand, never>;
}
