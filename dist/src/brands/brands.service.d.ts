/// <reference types="multer" />
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { CreateItemDto } from 'src/items/dto/create-item.dto';
export declare class BrandsService {
    private prisma;
    private cloudinary;
    constructor(prisma: PrismaService, cloudinary: CloudinaryService);
    uploadImageToCloudinary(file: Express.Multer.File): Promise<import(".prisma/client").Image>;
    create(createBrandDto: CreateBrandDto): import(".prisma/client").Prisma.Prisma__BrandClient<import(".prisma/client").Brand, never>;
    createItem(name: string, createItemDto: CreateItemDto): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Brand & {
        images: {
            url: string;
            resolution: string;
            type: string;
        }[];
    })[]>;
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
    findOne(name: string): Promise<import(".prisma/client").Brand & {
        images: {
            url: string;
            resolution: string;
            type: string;
        }[];
    }>;
    update(id: number, updateBrandDto: UpdateBrandDto): import(".prisma/client").Prisma.Prisma__BrandClient<import(".prisma/client").Brand, never>;
    remove(name: string): Promise<import(".prisma/client").Brand>;
    replace(id: number, updateBrandDto: UpdateBrandDto): import(".prisma/client").Prisma.Prisma__BrandClient<import(".prisma/client").Brand, never>;
}
