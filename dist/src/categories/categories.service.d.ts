import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateItemDto } from 'src/items/dto/create-item.dto';
export declare class CategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCategoryDto: CreateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category, never>;
    createItem(name: string, createItemDto: CreateItemDto): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Category & {
        images: {
            url: string;
            resolution: string;
            type: string;
        }[];
    })[]>;
    findItems(name: string): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Category & {
        items: {
            name: string;
        }[];
    })[]>;
    findByName(name: string): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category & {
        images: {
            url: string;
            resolution: string;
            type: string;
        }[];
    }, never>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category, never>;
    replace(id: number, updateCategoryDto: UpdateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category, never>;
    remove(name: string): Promise<import(".prisma/client").Category>;
}
